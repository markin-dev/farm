<template>
  <div
    :style="scytheStyleObject"
    class="scythe"
  >
    <div
      :style="iconStyleObject"
      class="scythe__icon"
      @mousedown="onMousedown"
    />
    <transition name="scythe__substrate">
      <div
        v-if="isSubstrate"
        :style="iconStyleObject"
        class="scythe__substrate"
      />
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 360,
    },
  },

  data() {
    return {
      isSubstrate: false,
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
    onMousedown() {
      this.isSubstrate = true;
      this.$emit('mousedown-on-scythe');

      this.$nextTick(() => {
        this.isSubstrate = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.scythe {
  position: relative;

  &__icon {
    position: absolute;
    background-image: url('~@/assets/scythe.png');
    background-size: 80%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: $blue-200;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;

    &:hover {
      background-color: $blue-300;
    }

    &:active {
      animation: pressed .3s;
    }
  }

  &__substrate {
    position: absolute;
    background-color: $blue-200;
    border-radius: 50%;

    &-leave-to {
      animation: substrateScaleUp 1s;
    }
  }
}

@keyframes pressed {
  50% {
    transform: scale(0.9);
  }
}

@keyframes substrateScaleUp {
  to {
    opacity: 0;
    transform: scale(1.2);
  }
}
</style>
