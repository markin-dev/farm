<template>
  <div>
    <Header />
    <div class="container">
      <GameField />
      <DevPanel
        v-if="isDevPanel"
        @close="isDevPanel = false"
      >
        <pre>{{ $store.state }}</pre>
      </DevPanel>
      <SavingStatusIcon />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import GameField from '@/components/GameField.vue';
import DevPanel from '@/components/DevPanel/DevPanel.vue';
import SavingStatusIcon from '@/components/SavingStatusIcon.vue';

export default {
  name: 'App',

  components: {
    GameField,
    DevPanel,
    SavingStatusIcon,
    Header,
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
