<template>
  <FModal
    class="help-modal"
    :is-open="isOpen"
    title="Help"
    @close="emits('close')"
  >
    <p>Help help help</p>
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
