<template>
  <div class="crops-shop">
    <h3>Crops Shop</h3>
    <ShopItemsList
      :items="crops"
      @shop-item-click="buyCrop"
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
    ...mapState(['crops']),
  },

  methods: {
    buyCrop(event) {
      this.$store.dispatch('buyCrop', event);
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
