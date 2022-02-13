<template>
  <transition
    appear
    name="float-text"
  >
    <div
      class="float-text"
      :style="{transition: `all ${duration}s`}"
    >
      <span
        class="float-text__value"
        :style="{
          fontSize: `${fontSizePx}px`,
        }"
      >
        {{ text }}
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },

    duration: {
      type: Number,
      default: 0.6,
    },

    fontSizePx: {
      type: Number,
      default: 16,
    },
  },

  mounted() {
    setTimeout(() => {
      this.$emit('expired');
    }, this.duration * 1000);
  },
};
</script>

<style lang="scss" scoped>
.float-text {
  pointer-events: none;

  &__value {
    position: absolute;
    display: inline-block;
    color: $green-500;
  }

  &-enter-to {
    opacity: 0;
    transform: translateY(-30px);
  }
}
</style>
