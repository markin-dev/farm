<template>
  <div class="crops-shop">
    <h3>Crops Shop</h3>
    <CropsList />
  </div>
</template>

<script>
import CropsList from '@/components/CropsList.vue';

export default {
  components: {
    CropsList,
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
