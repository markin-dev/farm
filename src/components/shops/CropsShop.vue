<template>
  <div class="crops-shop">
    <h3>Crops Shop</h3>
    <ShopItemsList
      :items="$options.crops.value"
      income-text="per click"
      @shop-item-click="buyCrop"
    />
  </div>
</template>

<script>
import ShopItemsList from '@/components/shops/ShopItemsList.vue';
import useStore from '@/store/useStore';
import { buyCrop } from '@/store/actions';

const { crops } = useStore();

export default {
  crops,

  components: {
    ShopItemsList,
  },

  methods: {
    buyCrop(event) {
      buyCrop(event);
    },
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
