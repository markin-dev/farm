<template>
  <div class="modals-container">
    <AboutModal
      :is-open="isAboutModalShown"
      @close="closeAboutModal"
    />
    <HelpModal
      :is-open="isHelpModalShown"
      @close="closeHelpModal"
    />
  </div>
</template>

<script setup>
import AboutModal from '@/components/modals/AboutModal.vue';
import HelpModal from '@/components/modals/HelpModal.vue';
import useModals from '@/components/modals/useModals';

const {
  isAboutModalShown,
  closeAboutModal,
  isHelpModalShown,
  closeHelpModal,
} = useModals();

</script>
