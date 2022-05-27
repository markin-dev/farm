<template>
  <div class="tooltip-container">
    <slot />
    <div class="tooltip">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'default text',
  },
});
</script>

<style lang="scss">
.tooltip-container {
  position: relative;
  cursor: help;

  &:hover {
    .tooltip {
      visibility: visible;
    }
  }
}

.tooltip {
  visibility: hidden;
  position: absolute;
  top: -50px;
  padding: 12px;
  background-color: $gray-50;
  border: 1px solid $gray-300;
  border-radius: 4px;
}
</style>
