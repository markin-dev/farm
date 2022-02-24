<template>
  <div
    v-if="isOpen"
    class="f-popup"
  >
    <div
      class="f-popup__overlay"
      @click.self="close"
    >
      <div class="f-popup__body">
        <div class="f-popup__header">
          <h2 class="f-popup__title">
            {{ title }}
          </h2>
          <IconButton @click="close" />
        </div>
        <div class="f-popup__content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue';

export default {
  components: {
    IconButton,
  },

  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
      default: '',
    },
  },

  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.f-popup {
  &__overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    cursor: pointer;
  }

  &__body {
    background-color: white;
    cursor: auto;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid $gray-300;
    background-color: $gray-50;
  }

  &__title {
    margin: 0;
    line-height: 1;
  }

  &__content {
    padding: 16px;
  }
}
</style>
