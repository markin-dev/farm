<template>
  <FModal
    class="congratulations-modal"
    :is-open="isOpen"
    title="Congratulations!"
    @close="emits('close')"
  >
    <p>You are the best farmer in the world!</p>
  </FModal>
</template>

<script setup>
import FModal from '@/components/modals/FModal.vue';

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['close']);
</script>
