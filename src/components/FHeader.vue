<template>
  <div class="header">
    <div class="header__content">
      <h1>Farm</h1>
      <div class="actions">
        <FLink
          class="actions__item"
          text="Save"
          @click="save"
        />
        <FLink
          class="actions__item"
          text="About"
          @click="openModal"
        />
      </div>
    </div>
    <AboutModal
      :is-open="isOpen"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import FLink from '@/components/FLink.vue';
import AboutModal from '@/components/modals/AboutModal.vue';
import useShowHide from '@/composables/useShowHide';
import { save } from '@/store/saveLoad';

const {
  isShowed: isOpen,
  show: openModal,
  hide: closeModal,
} = useShowHide();
</script>

<style lang="scss" scoped>
.header {
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 24px;
    height: 64px;
    border-bottom: 1px solid $gray-300;
    background-color: $gray-50;
    box-sizing: border-box;
  }

  .actions {
    &__item:not(:last-child) {
      margin-right: 16px;
    }
  }
}
</style>
