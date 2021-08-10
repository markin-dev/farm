<template>
  <div class="crops-list">
    <ShopItem
      v-for="crop in crops"
      :key="crop.name"
      :name="crop.name"
      :icon-name="crop.iconName"
      :price="crop.price"
      :income="crop.income"
      :amount="crop.amount"
      class="crops-list__item"
      @click="buyCrop(crop.name)"
    />
  </div>
</template>

<script>
import ShopItem from '@/components/ShopItem.vue';

import { mapState } from 'vuex';

export default {
  components: {
    ShopItem,
  },

  computed: {
    ...mapState(['crops']),
  },

  methods: {
    buyCrop(cropName) {
      this.$store.dispatch('buyCrop', cropName);
    },
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
