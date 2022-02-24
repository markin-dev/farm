<template>
  <transition
    appear
    name="saving-status-icon"
  >
    <div
      v-if="$store.state.isSaving"
      class="saving-status-icon"
    />
  </transition>
</template>

<style lang="scss" scoped>
.saving-status-icon {
  position: fixed;
  bottom: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  background-image: url('~@/assets/images/save.png');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0;
  transition: all 1s;

  &-enter-active {
    opacity: 1;
  }

  &-enter-to {
    opacity: 0;
    transform: translateY(-30px);
  }
}
</style>
