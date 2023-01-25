<template>
  <div class="float-text-overlay">
    <div class="float-text-overlay__container">
      <FloatText
        v-for="item in floatTextItems"
        :id="item.id"
        :key="item.id"
        class="float-text-overlay__float-text"
        :style="getFloatTextStyle(item)"
        :text="item.value"
        :type="item.type"
        :animation-duration-ms="item.animationDurationMs"
        @animation-end="removeFloatTextItem"
      />
    </div>
  </div>
</template>

<script setup>
import FloatText from '@/components/floatText/FloatText.vue';
import useFloatText from '@/components/floatText/useFloatText';

const { floatTextItems, removeFloatTextItem } = useFloatText();

function getFloatTextStyle(item) {
  return {
    top: `${item.coords.y}px`,
    left: `${item.coords.x}px`,
  };
}
</script>

<style lang="scss" scoped>
.float-text-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 10;

  &__container {
    position: relative;
  }

  &__float-text {
    position: absolute;
    z-index: 10;
  }
}
</style>
