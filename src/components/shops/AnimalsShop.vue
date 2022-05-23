<template>
  <div class="animals-shop">
    <h3>Animals Shop</h3>
    <ShopItemsList
      :items="animals"
      income-text="auto income"
      @shop-item-click="buyAnimal"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ShopItemsList from '@/components/shops/ShopItemsList.vue';

export default {
  components: {
    ShopItemsList,
  },

  computed: {
    ...mapState(['animals']),
  },

  methods: {
    buyAnimal(event) {
      this.$store.dispatch('buyAnimal', event);
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
