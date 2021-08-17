<template>
  <div
    :class="[
      'shop-item',
      {'shop-item_disabled': disabled},
    ]"
    @click="disabled ? onClick : ''"
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
          +{{ $formatMoney(income) }} per click
        </div>
      </div>
      <div class="shop-item__amount">
        <div class="shop-item__count">
          {{ amount }}
        </div>
        <FloatText
          v-for="item in floatTextItems"
          :key="item.id"
          :text="item.value"
          :font-size-px="24"
          @expired="floatTextItems.shift()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FloatText from '@/components/FloatText.vue';

export default {
  components: {
    FloatText,
  },

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

    amount: {
      type: Number,
      default: 0,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      floatTextItems: [],
      numberOfPurchases: 1,
    };
  },

  methods: {
    onClick() {
      this.$emit('shop-item-click', this.numberOfPurchases);

      this.floatTextItems.push({
        id: Math.random(),
        value: `+${this.numberOfPurchases}`,
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

  &__amount {
    display: flex;
  }

  &__count {
    margin-right: 4px;
    font-size: 24px;
  }
}
</style>
