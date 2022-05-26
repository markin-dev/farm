<template>
  <span class="f-link">
    {{ text }}
  </span>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.f-link {
  cursor: pointer;
  user-select: none;

  &:hover {
    color: $gray-500;
  }
}
</style>
