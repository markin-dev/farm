<template>
  <div
    ref="scytheWrapper"
    class="scythe-wrapper"
  >
    <slot :handleHarvest="handleHarvest" />
    <FloatText
      v-for="item in incomeTextItems"
      :key="item.id"
      :ref="`floatText${item.id}`"
      class="scythe-wrapper__float-text"
      :text="item.value"
      :style="getFloatTextStyle(item)"
      @expired="incomeTextItems.shift()"
    />
  </div>
</template>

<script>
import FloatText from '@/components/FloatText.vue';

export default {
  components: {
    FloatText,
  },

  data() {
    return {
      incomeTextItems: [],
    };
  },

  methods: {
    handleHarvest(e) {
      const wrapperRect = this.$refs.scytheWrapper.getBoundingClientRect();

      this.incomeTextItems.push({
        id: Math.random(),
        value: `+${this.$formatMoney(this.$store.state.incomePerClick)}`,
        x: e.clientX - wrapperRect.left,
        y: e.clientY - wrapperRect.top,
      });

      this.$store.dispatch('harvest');
    },

    getFloatTextStyle(item) {
      const customYOffset = 15;
      const symbolWidthPx = 4;
      const itemValueLength = item.value.length;
      const customXOffset = symbolWidthPx * itemValueLength;

      return {
        top: `${item.y - customYOffset}px`,
        left: `${item.x - customXOffset}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.scythe-wrapper {
  position: relative;

  &__float-text {
    position: absolute;
  }
}
</style>
