<template>
  <div
    class="dev-panel-header"
    :style="{
      flex: `0 0 ${height}px`,
    }"
  >
    <div
      class="dev-panel-header__button dev-panel-header__button-close"
      @click="$emit('close-button-click')"
    />
    <div class="dev-panel-header__right-actions">
      <div
        class="dev-panel-header__button dev-panel-header__button-default-position"
        @click="$emit('default-position-button-click')"
      />
      <div
        :class="[
          'dev-panel-header__button dev-panel-header__button-minimize',
          {'dev-panel-header__button-minimize_minimized' : isMinimized}
        ]"
        @click="$emit('minimize-button-click')"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 32,
    },

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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: $gray-300;
  cursor: move;

  &__right-actions {
    display: flex;
    margin-right: 8px;
  }

  &__button {
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border: 1px solid $gray-500;
    cursor: pointer;

    &-close {
      position: relative;
      display: block;
      transform: scale(var(--ggs,1));
      margin-left: 8px;
      color: $gray-500;

      &::after,
      &::before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 14px;
        height: 2px;
        background: currentColor;
        transform: rotate(45deg);
        top: 8px;
        left: 2px;
      }

      &::after {
        transform: rotate(-45deg);
      }
    }

    &-default-position {
      position: relative;
      display: block;
      margin-right: 8px;
      transform: scale(var(--ggs,1));

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

    &-minimize {
      border-bottom-width: 3px;

      &_minimized {
        border-bottom-width: 1px;
        border-top-width: 3px;
      }
    }
  }
}
</style>
