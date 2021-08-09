<template>
  <div class="container">
    <GameField />
    <DevPanel />
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
  margin-top: 64px;
}
</style>
