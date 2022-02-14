<template>
  <div
    ref="floatTextZone"
    class="float-text-zone"
  >
    <FloatText
      v-for="item in floatTextItems"
      :key="item.id"
      :ref="`floatText${item.id}`"
      class="float-text-zone__float-text"
      :text="item.value"
      :style="getFloatTextStyle(item)"
      :font-size-px="fontSize"
      @expired="floatTextItems.shift()"
    />
    <slot />
  </div>
</template>

<script>
import FloatText from '@/components/FloatText.vue';

export default {
  components: {
    FloatText,
  },

  provide() {
    return {
      floatTextProvider: {
        renderFloatTextItem: this.renderFloatTextItem,
      },
    };
  },

  data() {
    return {
      floatTextItems: [],
      fontSize: 16,
    };
  },

  methods: {
    async renderFloatTextItem(e) {
      const zoneRect = this.$refs.floatTextZone.getBoundingClientRect();

      this.floatTextItems.push({
        id: Math.random(),
        value: `+${this.$formatMoney(this.$store.state.incomePerClick)}`,
        x: e.x - zoneRect.left,
        y: e.y - zoneRect.top,
      });
    },

    getFloatTextStyle(item) {
      const customYOffset = this.fontSize;
      const symbolWidthPx = this.fontSize * 0.28;
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
.float-text-zone {
  position: relative;
  outline: 1px solid blue;

  &__float-text {
    position: absolute;
    z-index: 10;
  }
}
</style>
