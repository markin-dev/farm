<template>
  <div class="crops-list">
    <ShopItem
      v-for="crop in $options.crops"
      :key="crop.name"
      :name="crop.name"
      :icon-name="crop.iconName"
      class="crops-list__item"
    />
  </div>
</template>

<script>
import ShopItem from '@/components/ShopItem.vue';

export default {
  crops: [
    {
      name: 'Wheat',
      iconName: 'wheat',
      basePrice: 100,
      income: 0.01,
    },
    {
      name: 'Potato',
      iconName: 'potato',
      basePrice: 200,
      income: 0.02,
    },
    {
      name: 'Carrot',
      iconName: 'carrot',
      basePrice: 400,
      income: 0.05,
    },
    {
      name: 'Corn',
      iconName: 'corn',
      basePrice: 1000,
      income: 1.5,
    },
    {
      name: 'Strawberry',
      iconName: 'strawberry',
      basePrice: 3000,
      income: 4,
    },
  ],

  components: {
    ShopItem,
  },
};
</script>

<style lang="scss" scoped>
.crops-list {
  width: 100%;

  &__item {
    margin-bottom: 14px;
  }
}
</style>
