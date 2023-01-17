<template>
  <div class="f-shop">
    <h3>{{ title }}</h3>
    <ShopItemsList
      :items="items"
      :income-text="incomeText"
      @shop-item-click="emits('shop-item-click', $event)"
    />
  </div>
</template>

<script setup>
import ShopItemsList from '@/components/shops/ShopItemsList.vue';

defineProps({
  title: {
    type: String,
    default: 'no name',
  },

  items: {
    type: Object,
    default: () => {},
  },

  incomeText: {
    type: String,
    default: 'default shop name',
  },
});

const emits = defineEmits(['shop-item-click']);

</script>

<style lang="scss" scoped>
.f-shop {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
