<template>
  <div class="container">
    <GameField />
    <DevPanel>
      <pre>{{ $store.state }}</pre>
    </DevPanel>
  </div>
</template>

<script>
import GameField from '@/components/GameField.vue';
import DevPanel from '@/components/DevPanel.vue';

export default {
  name: 'App',

  components: {
    GameField,
    DevPanel,
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
