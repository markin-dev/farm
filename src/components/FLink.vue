<template>
  <span class="f-link">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
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
