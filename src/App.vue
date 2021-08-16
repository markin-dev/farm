<template>
  <div class="container">
    <GameField />
    <DevPanel
      v-if="isDevPanel"
      @close="isDevPanel = false"
    >
      <pre>{{ $store.state }}</pre>
    </DevPanel>
  </div>
</template>

<script>
import GameField from '@/components/GameField.vue';
import DevPanel from '@/components/DevPanel/DevPanel.vue';

export default {
  name: 'App',

  components: {
    GameField,
    DevPanel,
  },

  data() {
    return {
      isDevPanel: true,
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
  margin-top: 64px;
  max-width: 600px;

  @include lg {
    max-width: 1200px;
  }
}
</style>
