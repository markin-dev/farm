<template>
  <div>
    <FHeader />
    <div class="container">
      <FloatTextOverlay />
      <GameField />
      <DevPanel
        v-if="isDevPanel"
        @close="isDevPanel = false"
      >
        <pre>{{ $store.state }}</pre>
      </DevPanel>
      <SavingStatusController />
    </div>
  </div>
</template>

<script>
import FHeader from '@/components/FHeader.vue';
import FloatTextOverlay from '@/components/floatText/FloatTextOverlay.vue';
import GameField from '@/components/GameField.vue';
import DevPanel from '@/components/devPanel/DevPanel.vue';
import SavingStatusController from '@/components/SavingStatusController.vue';

export default {
  name: 'App',

  components: {
    FHeader,
    FloatTextOverlay,
    GameField,
    DevPanel,
    SavingStatusController,
  },

  data() {
    return {
      isDevPanel: false,
    };
  },

  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
  },

  methods: {
    handleKeydown(event) {
      if (event.code === 'KeyD' && event.shiftKey) {
        this.isDevPanel = !this.isDevPanel;
      }
    },
  },
};
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
