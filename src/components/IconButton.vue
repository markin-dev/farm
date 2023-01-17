<template>
  <button
    class="icon-button"
    type="button"
  />
</template>

<style lang="scss" scoped>
.icon-button {
    padding: 0;
    width: 24px;
    height: 24px;
    background-color: transparent;
    background-image: url('~@/assets/icons/close_gray-800.svg');
    background-position: center;
    background-size: 100%;
    border: none;

    &:hover {
      background-image: url('~@/assets/icons/close_gray-500.svg');
      cursor: pointer;
    }
}
</style>
