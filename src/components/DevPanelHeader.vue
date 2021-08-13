<template>
  <div class="dev-panel-header">
    <div
      :class="[
        'dev-panel-header__minimize-button',
        {'dev-panel-header__minimize-button_minimized' : isMinimized}
      ]"
      @click="$emit('toggle-minimized')"
      @mousedown.stop
    />
  </div>
</template>

<script>
export default {
  props: {
    isMinimized: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.dev-panel-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0 0 32px;
  padding: 4px;
  width: 100%;
  background-color: $gray-300;
  cursor: move;
  box-sizing: border-box;

  &__minimize-button {
    width: 20px;
    height: 20px;
    margin-right: 4px;
    border: 1px solid $gray-500;
    border-bottom-width: 4px;
    cursor: pointer;
    box-sizing: border-box;

    &_minimized {
      border-bottom-width: 1px;
      border-top-width: 4px;
    }
  }
}
</style>
