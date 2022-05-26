<template>
  <transition
    appear
    name="saving-status-icon"
  >
    <div
      class="saving-status-icon"
      :style="{transition: `all ${animationDurationSec}s`}"
    />
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const timeout = ref(0);
const props = defineProps({
  animationDurationSec: {
    type: Number,
    default: 1,
  },
});
const emits = defineEmits(['animation-end']);

onMounted(() => {
  timeout.value = setTimeout(() => {
    emits('animation-end');
  }, props.animationDurationSec * 1000);
});

onUnmounted(() => {
  clearTimeout(timeout);
});
</script>

<style lang="scss" scoped>
.saving-status-icon {
  position: fixed;
  bottom: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  background-image: url('~@/assets/images/save.png');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0;
  transition: all 1s;

  &-enter-active {
    opacity: 1;
  }

  &-enter-to {
    opacity: 0;
    transform: translateY(-30px);
  }
}
</style>
