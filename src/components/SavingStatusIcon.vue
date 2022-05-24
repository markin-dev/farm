<template>
  <transition
    appear
    name="saving-status-icon"
  >
    <div
      class="saving-status-icon"
      :style="{transition: `all ${$options.animationDurationSec}s`}"
    />
  </transition>
</template>

<script>
export default {
  props: {
    animationDurationSec: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      timeout: 0,
    };
  },

  mounted() {
    this.timeout = setTimeout(() => {
      this.$emit('animation-end');
    }, this.animationDurationSec * 1000);
  },

  unmounted() {
    clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss" scoped>
.saving-status-icon {
  position: fixed;
  bottom: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  background-image: url('~@/assets/images/save.png');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0;
  transition: all 1s;

  &-enter-active {
    opacity: 1;
  }

  &-enter-to {
    opacity: 0;
    transform: translateY(-30px);
  }
}
</style>
