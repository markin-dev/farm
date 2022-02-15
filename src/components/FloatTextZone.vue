<template>
  <div
    ref="floatTextZone"
    class="float-text-zone"
  >
    <FloatText
      v-for="item in floatTextItems"
      :id="item.id"
      :key="item.id"
      :ref="`floatText${item.id}`"
      class="float-text-zone__float-text"
      :style="getFloatTextStyle(item)"
      :text="item.value"
      :font-size-px="item.fontSize"
      @animation-end="removeFloatTextItem"
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
    };
  },

  methods: {
    renderFloatTextItem(event) {
      this.floatTextItems.push({
        id: Math.random(),
        value: event.value || 'default text',
        coords: this.getTextCoords(event.coords),
        fontSize: event.fontSize || 16,
      });
    },

    removeFloatTextItem(id) {
      const itemIndex = this.floatTextItems.findIndex((i) => i.id === id);
      this.floatTextItems.splice(itemIndex, 1);
    },

    getTextCoords(coords = {}) {
      const zoneRect = this.$refs.floatTextZone.getBoundingClientRect();
      const zoneLeft = zoneRect.left;
      const zoneTop = zoneRect.top;
      const initialX = coords.x || zoneLeft;
      const initialY = coords.y || zoneTop;

      return {
        x: initialX - zoneLeft,
        y: initialY - zoneTop,
      };
    },

    getFloatTextStyle(item) {
      return {
        top: `${item.coords.y}px`,
        left: `${item.coords.x}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.float-text-zone {
  position: relative;

  &__float-text {
    position: absolute;
    z-index: 10;
  }
}
</style>
