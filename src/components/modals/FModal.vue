<template>
  <div
    v-if="isOpen"
    :class="[
      'f-modal',
      { 'f-modal_unclosable': unclosable },
    ]"
  >
    <div
      class="f-modal__overlay"
      @click.self="close"
    >
      <div class="f-modal__body">
        <div class="f-modal__header">
          <h2 class="f-modal__title">
            {{ title }}
          </h2>
          <IconButton
            v-if="!unclosable"
            @click="close"
          />
        </div>
        <div class="f-modal__content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconButton from '@/components/IconButton.vue';

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },

  title: {
    type: String,
    default: '',
  },

  unclosable: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['close']);

function close() {
  emits('close');
}
</script>

<style lang="scss" scoped>
.f-modal {
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

  &_unclosable {
    .f-modal__overlay {
      cursor: auto;
    }
  }

  &__body {
    max-width: 1000px;
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
