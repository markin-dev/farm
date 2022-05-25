<template>
  <div>
    <FHeader />
    <div class="container">
      <FloatTextOverlay />
      <GameField />
      <DevPanel
        v-if="isDevPanelShowed"
        @close="isDevPanelShowed = false"
      >
        <pre>{{ store }}</pre>
      </DevPanel>
      <SavingStatusController />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import useStore from '@/store/useStore';
import FHeader from '@/components/FHeader.vue';
import FloatTextOverlay from '@/components/floatText/FloatTextOverlay.vue';
import GameField from '@/components/GameField.vue';
import DevPanel from '@/components/devPanel/DevPanel.vue';
import SavingStatusController from '@/components/SavingStatusController.vue';

const isDevPanelShowed = ref(false);
const { store } = useStore();

function handleKeydown(event) {
  if (event.code === 'KeyD' && event.shiftKey) {
    isDevPanelShowed.value = !isDevPanelShowed.value;
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});
</script>

<style lang="scss" scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;

  @include lg {
    max-width: 1200px;
  }
}
</style>
