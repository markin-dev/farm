<template>
  <transition
    appear
    name="custom-substrate"
  >
    <div
      :style="styleObject"
      class="custom-substrate"
    />
  </transition>
</template>

<script setup>
import { onMounted } from 'vue';

defineProps({
  styleObject: {
    type: Object,
    default: () => ({}),
  },
});

const emits = defineEmits(['animation-end']);

onMounted(() => {
  setTimeout(() => {
    emits('animation-end');
  }, 1000);
});
</script>

<style lang="scss" scoped>
.custom-substrate {
  position: absolute;
  background-color: $blue-100;
  border-radius: 50%;
  z-index: -1;

  &-enter-to {
    animation: substrateScaleUp 1s;
  }
}

@keyframes substrateScaleUp {
  to {
    opacity: 0;
    transform: scale(1.2);
  }
}
</style>
