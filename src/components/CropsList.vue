<template>
  <div class="crops-list">
    <ShopItem
      v-for="item in 5"
      :key="item"
      class="crops-list__item"
    />
  </div>
</template>

<script>
import ShopItem from '@/components/ShopItem.vue';

export default {
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
