<template>
  <div
    :class="[
      'shop-item',
      {'shop-item_disabled': isDisabled},
    ]"
    @click="onClick"
  >
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
          {{ incomeText }}
        </div>
      </div>
      <div
        ref="itemsCount"
        class="shop-item__count"
      >
        {{ amount }}
      </div>
    </div>
  </div>
</template>

<script>
import { getMoney } from '@/newStore';

export default {
  inject: ['floatTextProvider'],

  props: {
    id: {
      type: Number,
      default: NaN,
      required: true,
    },

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

    incomeText: {
      type: String,
      default: '',
    },

    amount: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      floatTextItems: [],
      numberOfPurchases: 1,
    };
  },

  computed: {
    isDisabled() {
      return this.price > getMoney.value;
    },
  },

  methods: {
    onClick() {
      if (this.isDisabled) {
        return;
      }

      this.$emit('shop-item-click', {
        id: this.id,
        amount: this.numberOfPurchases,
      });

      this.renderAmountFloatText();
    },

    renderAmountFloatText() {
      const itemsCountRect = this.$refs.itemsCount.getBoundingClientRect();
      const customYOffset = 6;

      this.floatTextProvider.renderFloatTextItem({
        value: `+${this.numberOfPurchases}`,
        coords: {
          x: itemsCountRect.right + customYOffset,
          y: itemsCountRect.top,
        },
        fontSize: 24,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.shop-item {
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: $gray-50;
  }

  &_disabled {
    cursor: auto;

    div {
      color: $gray-400;
    }

    &:hover {
      background-color: transparent;
    }

    .shop-item__icon {
        filter: grayscale(100%);
    }

    .shop-item__per-click {
      color: $gray-300;
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
  }

  &__icon {
    width: 64px;
    height: 64px;
    margin-right: 16px;
    background-size: contain;
    background-repeat: no-repeat;

    @include get-image('wheat');
    @include get-image('potato');
    @include get-image('carrot');
    @include get-image('corn');
    @include get-image('strawberry');
    @include get-image('chicken');
    @include get-image('rabbit');
    @include get-image('pig');
    @include get-image('goat');
    @include get-image('cow');
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
