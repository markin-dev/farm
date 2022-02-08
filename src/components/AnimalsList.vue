<template>
  <div class="animals-list">
    <ShopItem
      v-for="animal in animals"
      :key="animal.id"
      :name="animal.name"
      :icon-name="animal.iconName"
      :price="animal.price"
      :income-text="`+${$formatMoney(animal.income)} auto income`"
      :amount="animal.amount"
      :disabled="$store.getters.isAnimalDisabled(animal.id)"
      class="animals-list__item"
      @shop-item-click="buyAnimal(animal.id, $event)"
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
    ...mapState(['animals']),
  },

  methods: {
    buyAnimal(animalId, amount) {
      this.$store.dispatch('buyAnimal', {
        id: animalId,
        amount,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.animals-list {
  width: 100%;

  &__item {
    margin-bottom: 14px;
  }
}
</style>
