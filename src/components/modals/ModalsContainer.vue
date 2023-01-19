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
    <CongratulationsModal
      :is-open="isCongratulationsModalShown"
    />
  </div>
</template>

<script setup>
import AboutModal from '@/components/modals/AboutModal.vue';
import HelpModal from '@/components/modals/HelpModal.vue';
import CongratulationsModal from '@/components/modals/CongratulationsModal.vue';
import useModals from '@/components/modals/useModals';

const {
  isAboutModalShown,
  closeAboutModal,
  isHelpModalShown,
  closeHelpModal,
  isCongratulationsModalShown,
} = useModals();

</script>
