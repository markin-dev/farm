<template>
  <div class="crops-shop">
    <h3>Animals Shop</h3>
    <AnimalsList />
  </div>
</template>

<script>
import AnimalsList from '@/components/AnimalsList.vue';

export default {
  components: {
    AnimalsList,
  },
};
</script>

<style lang="scss" scoped>
.crops-shop {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
