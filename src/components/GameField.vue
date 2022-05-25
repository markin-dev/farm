<template>
  <div class="game-field">
    <div class="game-field__left-menu">
      <AnimalsShop />
    </div>
    <div
      class="game-field__main-field"
    >
      <h3>Total farm cost: {{ $formatMoney($options.getTotalMoney.value) }}</h3>
      <FScythe class="scythe" />
      <p>Money: {{ $formatMoney($options.getMoney.value) }}</p>
      <p>Income per click: {{ $formatMoney($options.getIncomePerClick.value) }}</p>
      <p ref="autoIncome">
        Auto income: {{ $formatMoney($options.getAutoIncome.value) }}
      </p>
    </div>
    <div class="game-field__right-menu">
      <CropsShop />
    </div>
  </div>
</template>

<script>
import FScythe from '@/components/FScythe.vue';
import AnimalsShop from '@/components/shops/AnimalsShop.vue';
import CropsShop from '@/components/shops/CropsShop.vue';
import {
  getMoney,
  getTotalMoney,
  getIncomePerClick,
  getAutoIncome,
  getEventBus,
} from '@/store';

const eventBus = getEventBus.value;

export default {
  getMoney,
  getTotalMoney,
  getIncomePerClick,
  getAutoIncome,

  components: {
    FScythe,
    AnimalsShop,
    CropsShop,
  },

  inject: ['floatTextProvider'],

  data() {
    return {
      crops: 0,
      incomeTextItems: [],
      autoIncomeTextItems: [],
    };
  },

  mounted() {
    eventBus.on('added-auto-income', this.onAddedAutoIncome);
  },

  unmounted() {
    eventBus.off('added-auto-income', this.onAddedAutoIncome);
  },

  methods: {
    onAddedAutoIncome(event) {
      if (!event) {
        return;
      }

      this.renderAutoIncomeFloatText(event);
    },

    renderAutoIncomeFloatText(value) {
      const autoIncomeRect = this.$refs.autoIncome.getBoundingClientRect();
      const customYOffset = 6;

      this.floatTextProvider.renderFloatTextItem({
        value: `+${this.$formatMoney(value)}`,
        coords: {
          x: autoIncomeRect.right + customYOffset,
          y: autoIncomeRect.top,
        },
        fontSize: 16,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.game-field {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @include lg {
    flex-direction: row;
  }

  &__left-menu {
    @include lg {
      width: 30%;
      border-left: 1px solid $gray-300;
      border-right: 1px solid $gray-300;
    }
  }

  &__main-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    .scythe {
      margin-bottom: 24px;
    }

    p {
      margin-bottom: 12px;
    }
  }

  &__right-menu {
    @include lg {
      width: 30%;
      border-left: 1px solid $gray-300;
      border-right: 1px solid $gray-300;
    }
  }
}
</style>
