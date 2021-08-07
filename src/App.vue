<template>
  <div class="container">
    <GameField />
  </div>
</template>

<script>
import GameField from '@/components/GameField.vue';

export default {
  name: 'App',
  components: {
    GameField,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 64px;
}
</style>
