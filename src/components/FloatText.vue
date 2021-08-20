<template>
  <div class="float-text">
    <transition
      appear
      name="float-text"
      @after-enter="$emit('expired');"
    >
      <span
        class="float-text__value"
        :style="{
          fontSize: `${fontSizePx}px`,
          transition: `all ${duration}s`,
        }"
      >
        {{ text }}
      </span>
    </transition>
  </div>
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
};
</script>

<style lang="scss" scoped>
.float-text {
  &__value {
    position: absolute;
    display: inline-block;
    color: $green-500;
    opacity: 0;
  }

  &-enter-active {
    opacity: 1;
  }

  &-enter-to {
    opacity: 0;
    transform: translateY(-30px);
  }
}
</style>
