<template>
  <div class="shop-item">
    <div class="shop-item__wrapper">
      <div class="shop-item__icon" />
      <div class="shop-item__desc">
        <div class="shop-item__name">
          Name
        </div>
        <div class="shop-item__price">
          Price: 100$
        </div>
        <div class="shop-item__per-click">
          +{{ $formatMoney(0.5) }} per click
        </div>
      </div>
      <div class="shop-item__count">
        5
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop-item {
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: $gray-50;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    transition: transform .1s;

    &:active {
      transform: scale(0.98);
    }
  }

  &__icon {
    width: 64px;
    height: 64px;
    margin-right: 16px;
    background-image: url('~@/assets/wheat.png');
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%;
  }

  &__desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 24px;
  }

  &__name {
    margin-bottom: 6px;
  }

  &__price {
    margin-bottom: 6px;
  }

  &__per-click {
    color: $gray-400;
  }

  &__count {
    font-size: 24px;
  }
}
</style>
