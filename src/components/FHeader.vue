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
          text="Help"
          @click="openHelpModal"
        />
        <FLink
          class="actions__item"
          text="About"
          @click="openAboutModal"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import FLink from '@/components/FLink.vue';
import { save } from '@/store/saveLoad';
import useModals from '@/components/modals/useModals';

const {
  openAboutModal,
  openHelpModal,
} = useModals();
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
