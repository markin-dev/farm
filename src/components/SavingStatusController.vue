<template>
  <SavingStatusIcon
    v-if="isIconShowed"
    @animation-end="hideIcon"
  />
</template>

<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue';
import SavingStatusIcon from '@/components/SavingStatusIcon.vue';
import useStore from '@/store/useStore';
import useShowHide from '@/composables/useShowHide';

const { eventBus } = useStore();
const { isShowed: isIconShowed, show: showIcon, hide: hideIcon } = useShowHide();

async function onGameSaved() {
  hideIcon();
  await nextTick();
  showIcon();
}

onMounted(() => {
  eventBus.value.on('game-saved', onGameSaved);
});

onUnmounted(() => {
  eventBus.value.off('game-saved', onGameSaved);
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
