<template>
  <div
    :style="scytheStyleObject"
    class="scythe"
  >
    <div
      :style="iconStyleObject"
      class="scythe__button"
      @mousedown="onMousedown"
    >
      <ScytheIcon class="scythe__button-icon" />
    </div>
    <Substrate
      v-for="item in substrates"
      :key="item.id"
      :style-object="iconStyleObject"
      @expired="substrates.shift()"
    />
  </div>
</template>

<script>
import ScytheIcon from '@/components/svgWrappers/ScytheIcon.vue';
import Substrate from '@/components/Substrate.vue';

export default {
  components: {
    ScytheIcon,
    Substrate,
  },

  props: {
    size: {
      type: Number,
      default: 360,
    },
  },

  data() {
    return {
      substrates: [],
    };
  },

  computed: {
    scytheStyleObject() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      };
    },

    iconStyleObject() {
      const iconSize = this.size * 0.8;
      const iconIndent = (this.size - iconSize) / 2;

      return {
        top: `${iconIndent}px`,
        left: `${iconIndent}px`,
        width: `${iconSize}px`,
        height: `${iconSize}px`,
      };
    },
  },

  methods: {
    onMousedown(event) {
      this.substrates.push({
        id: Math.random(),
      });
      this.$emit('mousedown-on-scythe', event);
    },
  },
};
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
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    transition: background-color .2s;

    &:hover {
      background-color: $blue-200;

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
