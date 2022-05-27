<template>
  <button
    class="hold-button"
    :style="style"
    @mousedown="startProgress"
    @mouseup="stopProgress"
    @mouseleave="stopProgress"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  $gray50,
  $gray300,
} from '@/utils/mapColors';

let interval;
const progress = ref(0);
const style = computed(() => ({
  background: `linear-gradient(90deg, ${$gray300} ${progress.value}%, ${$gray50} 0%) no-repeat`,
}));

defineProps({
  text: {
    type: String,
    default: 'default text',
  },
});

const emits = defineEmits(['invoked']);

function startProgress() {
  interval = setInterval(() => {
    progress.value += 1;
    if (progress.value === 100) {
      clearInterval(interval);
      emits('invoked');
    }
  }, 10);
}

function stopProgress() {
  progress.value = 0;
  clearInterval(interval);
}
</script>

<style lang="scss">
.hold-button {
  padding: 8px;
  font-size: 16px;
  border: 1px solid $gray-300;
  cursor: pointer;
}
</style>
