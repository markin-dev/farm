<template>
  <div class="modals-container">
    <AboutModal
      :is-open="isAboutModalShown"
      @close="closeAboutModal"
    />
  </div>
</template>

<script setup>
import AboutModal from '@/components/modals/AboutModal.vue';
import useModals from '@/components/modals/useModals';

const {
  isAboutModalShown,
  closeAboutModal,
} = useModals();

</script>
