<template>
  <div class="animals-shop">
    <h3>Animals Shop</h3>
    <ShopItemsList
      :items="$options.animals.value"
      income-text="auto income"
      @shop-item-click="buyAnimal"
    />
  </div>
</template>

<script>
import ShopItemsList from '@/components/shops/ShopItemsList.vue';
import useStore from '@/store/useStore';
import { buyAnimal } from '@/store/actions';

const { animals } = useStore();

export default {
  animals,

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
