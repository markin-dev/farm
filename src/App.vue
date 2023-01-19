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
import { ref, onMounted, watch } from 'vue';
import useStore from '@/store/useStore';
import FHeader from '@/components/FHeader.vue';
import ModalsContainer from '@/components/modals/ModalsContainer.vue';
import FloatTextOverlay from '@/components/floatText/FloatTextOverlay.vue';
import GameField from '@/components/GameField.vue';
import DevPanel from '@/components/devPanel/DevPanel.vue';
import SavingStatusController from '@/components/SavingStatusController.vue';
import { clearSave, save } from '@/store/saveLoad';
import HoldButton from '@/components/HoldButton.vue';
import useModals from '@/components/modals/useModals';
import { stopGameLoop, startGameLoop } from './store/gameLoop';

const isDevPanelShowed = ref(false);
const { store, totalMoney, setGameCompletionFlag } = useStore();
const { openHelpModal, openCongratulationsModal } = useModals();
const TOTAL_MONEY_GOAL = 1000000000;

function handleKeydown(event) {
  if (event.code === 'KeyD' && event.shiftKey) {
    isDevPanelShowed.value = !isDevPanelShowed.value;
  }
}

watch(totalMoney, (newValue) => {
  if (newValue >= TOTAL_MONEY_GOAL) {
    setGameCompletionFlag(true);
    openCongratulationsModal();
    save();
    stopGameLoop();
  }
});

onMounted(() => {
  const OLD_USER_KEY = 'FARM_IS_OLD_USER';
  const isOldUser = localStorage.getItem(OLD_USER_KEY);

  if (!isOldUser) {
    openHelpModal();
    localStorage.setItem(OLD_USER_KEY, true);
  }

  document.addEventListener('keydown', handleKeydown);

  startGameLoop();
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
