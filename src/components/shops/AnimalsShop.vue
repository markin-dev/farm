<template>
  <div class="animals-shop">
    <h3>Animals Shop</h3>
    <ShopItemsList
      :items="$options.getAnimals.value"
      income-text="auto income"
      @shop-item-click="buyAnimal"
    />
  </div>
</template>

<script>
import ShopItemsList from '@/components/shops/ShopItemsList.vue';
import { buyAnimal, getAnimals } from '@/newStore';

export default {
  getAnimals,

  components: {
    ShopItemsList,
  },

  methods: {
    buyAnimal(event) {
      buyAnimal(event);
    },
  },
};
</script>

<style lang="scss" scoped>
.animals-shop {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
