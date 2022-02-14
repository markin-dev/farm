<template>
  <div
    :style="scytheStyleObject"
    class="scythe"
  >
    <div
      :style="iconStyleObject"
      class="scythe__button"
      @mousedown="onMousedown"
    />
    <Substrate
      v-for="item in substrates"
      :key="item.id"
      :style-object="iconStyleObject"
      @expired="substrates.shift()"
    />
  </div>
</template>

<script>
import Substrate from '@/components/Substrate.vue';

export default {
  components: {
    Substrate,
  },

  inject: ['floatTextProvider'],

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
      this.floatTextProvider.renderFloatTextItem({
        x: event.clientX,
        y: event.clientY,
      });

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
    background-image: url('../assets/scythe_color.png');
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
      background-image: url('../assets/scythe_white.png');

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
