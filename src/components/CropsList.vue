<template>
  <div class="crops-list">
    <ShopItem
      v-for="crop in crops"
      :key="crop.id"
      :name="crop.name"
      :icon-name="crop.iconName"
      :price="crop.price"
      :income-text="`+${$formatMoney(crop.income)} per click`"
      :amount="crop.amount"
      :disabled="$store.getters.isCropDisabled(crop.id)"
      class="crops-list__item"
      @shop-item-click="buyCrop(crop.id, $event)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ShopItem from '@/components/ShopItem.vue';

export default {
  components: {
    ShopItem,
  },

  computed: {
    ...mapState(['crops']),
  },

  methods: {
    buyCrop(cropId, amount) {
      this.$store.dispatch('buyCrop', {
        id: cropId,
        amount,
      });
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
