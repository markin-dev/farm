<template>
  <div
    :style="scytheStyleObject"
    class="scythe"
  >
    <div
      :style="iconStyleObject"
      class="scythe__button"
      @mousedown="onMouseDown"
    />
    <ScytheSubstrate
      v-for="item in substrates"
      :key="item.id"
      :style-object="iconStyleObject"
      @animation-end="substrates.shift()"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { harvest } from '@/store/actions';
import useStore from '@/store/useStore';
import useFloatText from '@/components/floatText/useFloatText';
import ScytheSubstrate from '@/components/ScytheSubstrate.vue';
import formatMoney from '@/utils/formatMoney';

const { incomePerClick } = useStore();
const substrates = ref([]);
const props = defineProps({
  size: {
    type: Number,
    default: 360,
  },
});
const { addFloatTextItem } = useFloatText();
const scytheStyleObject = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
}));
const iconStyleObject = computed(() => {
  const iconSize = props.size * 0.8;
  const iconIndent = (props.size - iconSize) / 2;

  return {
    top: `${iconIndent}px`,
    left: `${iconIndent}px`,
    width: `${iconSize}px`,
    height: `${iconSize}px`,
  };
});

function renderSubstrate() {
  substrates.value.push({
    id: Math.random(),
  });
}

function renderIncomeFloatText(event) {
  const value = `${formatMoney(incomePerClick.value)}`;
  const fontSize = 16;
  const symbolWidthCoefficient = 0.28;
  const symbolWidthPx = fontSize * symbolWidthCoefficient;
  const itemValueLength = value.length;
  const customXOffset = symbolWidthPx * itemValueLength;

  addFloatTextItem({
    value,
    coords: {
      x: event.pageX - customXOffset,
      y: event.pageY - fontSize,
    },
    fontSize,
  });
}

function onMouseDown(event) {
  harvest();
  renderSubstrate();
  renderIncomeFloatText(event);
}
</script>

<style lang="scss" scoped>
.scythe {
  position: relative;
  user-select: none;
  touch-action: manipulation;

  &__button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: $blue-300;
    background-image: url('~@/assets/images/scythe_color.png');
    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    transition-property: background-color, background-image;
    transition-duration: .2s;

    &:hover {
      background-color: $blue-200;
      background-image: url('~@/assets/images/scythe_white.png');

      .scythe__button-icon {
        fill: white;
      }
    }

    &:active {
      animation: pressed .3s;
    }
  }

  &__button-icon {
    fill: $gray-800;
    transition: fill .2s;
  }
}

@keyframes pressed {
  50% {
    transform: scale(0.98);
  }
}
</style>
