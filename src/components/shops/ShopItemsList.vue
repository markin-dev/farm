<template>
  <div class="shop-items-list">
    <ShopItem
      v-for="item in items"
      :id="item.id"
      :key="item.id"
      :name="item.name"
      :icon-name="item.iconName"
      :price="item.price"
      :income-text="`+${$formatMoney(item.income)} ${incomeText}`"
      :amount="item.amount"
      class="shop-items-list__item"
      @shop-item-click="$emit('shop-item-click', $event)"
    />
  </div>
</template>

<script>
import ShopItem from '@/components/shops/ShopItem.vue';

export default {
  components: {
    ShopItem,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },

    incomeText: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.shop-items-list {
  width: 100%;

  &__item {
    margin-bottom: 14px;
  }
}
</style>
