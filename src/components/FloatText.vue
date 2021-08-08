<template>
  <div class="float-text">
    <transition
      appear
      name="float-text"
    >
      <span
        class="float-text__value"
        :style="{transition: `all ${duration}s`}"
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
