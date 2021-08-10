<template>
  <div class="shop-item">
    <div class="shop-item__wrapper">
      <div
        class="shop-item__icon"
        :class="[`shop-item__icon-${iconName}`]"
      />
      <div class="shop-item__desc">
        <div class="shop-item__name">
          {{ name }}
        </div>
        <div class="shop-item__price">
          Price: {{ $formatMoney(price) }}
        </div>
        <div class="shop-item__per-click">
          +{{ $formatMoney(income) }} per click
        </div>
      </div>
      <div class="shop-item__count">
        5
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },

    iconName: {
      type: String,
      default: '',
    },

    price: {
      type: Number,
      default: 0,
    },

    income: {
      type: Number,
      default: 0,
    },
  },
};
</script>

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
    background-size: contain;
    background-repeat: no-repeat;

    @include get-icon(wheat);
    @include get-icon(potato);
    @include get-icon(carrot);
    @include get-icon(corn);
    @include get-icon(strawberry);
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
