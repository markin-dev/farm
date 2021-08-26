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

  &:hover {
    color: $gray-600;
  }
}
</style>
