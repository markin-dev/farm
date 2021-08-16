<template>
  <div class="dev-panel-header">
    <div
      class="dev-panel-header__default-position-button"
      @click="$emit('default-position-button-click')"
    />
    <div
      :class="[
        'dev-panel-header__minimize-button',
        {'dev-panel-header__minimize-button_minimized' : isMinimized}
      ]"
      @click="$emit('toggle-minimized')"
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
  width: 100%;
  background-color: $gray-300;
  cursor: move;

  &__default-position-button {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    border: 1px solid $gray-500;
    transform: scale(var(--ggs,1));
    cursor: pointer;

    &::after,
    &::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      color: $gray-500;
    }

    &::after {
      width: 18px;
      height: 2px;
      background: currentColor;
      transform: rotate(-45deg);
      bottom: 8px;
    }

    &::before {
      width: 8px;
      height: 8px;
      bottom: 2px;
      left: 2px;
      border-bottom: 2px solid;
      border-left: 2px solid
    }
  }

  &__minimize-button {
    width: 20px;
    height: 20px;
    margin-right: 4px;
    border: 1px solid $gray-500;
    border-bottom-width: 3px;
    cursor: pointer;
    box-sizing: border-box;

    &_minimized {
      border-bottom-width: 1px;
      border-top-width: 3px;
    }
  }
}
</style>
