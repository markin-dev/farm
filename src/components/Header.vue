<template>
  <div class="header">
    <div class="header__content">
      <h1>Farm</h1>
      <div class="actions">
        <FLink
          class="actions__item"
          text="Save"
          @click="manualSave"
        />
        <FLink
          class="actions__item"
          text="About"
          @click="openAboutPopup"
        />
      </div>
    </div>
    <AboutModal
      :is-open="isAboutPopupOpen"
      @close="closeAboutPopup"
    />
  </div>
</template>

<script>
import FLink from '@/components/FLink.vue';
import AboutModal from '@/components/AboutModal.vue';
import { save } from '@/saveLoad';

export default {
  components: {
    FLink,
    AboutModal,
  },

  data() {
    return {
      isAboutPopupOpen: false,
    };
  },

  methods: {
    manualSave() {
      save(this.$store);
    },

    openAboutPopup() {
      this.isAboutPopupOpen = true;
    },

    closeAboutPopup() {
      this.isAboutPopupOpen = false;
    },
  },
};
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
