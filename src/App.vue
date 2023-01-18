<template>
  <div>
    <FHeader />
    <ModalsContainer />

    <div class="container">
      <FloatTextOverlay />
      <GameField />
      <DevPanel
        v-if="isDevPanelShowed"
        @close="isDevPanelShowed = false"
      >
        <HoldButton
          class="clear-save-button"
          text="Clear save"
          @invoked="clearSave"
        />
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
import ModalsContainer from '@/components/modals/ModalsContainer.vue';
import FloatTextOverlay from '@/components/floatText/FloatTextOverlay.vue';
import GameField from '@/components/GameField.vue';
import DevPanel from '@/components/devPanel/DevPanel.vue';
import SavingStatusController from '@/components/SavingStatusController.vue';
import { clearSave } from '@/store/saveLoad';
import HoldButton from '@/components/HoldButton.vue';
import useModals from '@/components/modals/useModals';

const isDevPanelShowed = ref(false);
const store = useStore();
const { openHelpModal } = useModals();

function handleKeydown(event) {
  if (event.code === 'KeyD' && event.shiftKey) {
    isDevPanelShowed.value = !isDevPanelShowed.value;
  }
}

onMounted(() => {
  const OLD_USER_KEY = 'FARM_IS_OLD_USER';
  const isOldUser = localStorage.getItem(OLD_USER_KEY);

  if (!isOldUser) {
    openHelpModal();
    localStorage.setItem(OLD_USER_KEY, true);
  }

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

.clear-save-button {
  margin-bottom: 12px;
}
</style>
