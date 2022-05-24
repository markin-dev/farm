<template>
  <div class="game-field">
    <div class="game-field__left-menu">
      <AnimalsShop />
    </div>
    <div
      class="game-field__main-field"
    >
      <FScythe class="scythe" />
      <div class="money">
        Money: {{ $formatMoney($options.getMoney.value) }}
      </div>
      <div class="income-per-click">
        Income per click: {{ $formatMoney($options.getIncomePerClick.value) }}
      </div>
      <div ref="autoIncome">
        Auto income: {{ $formatMoney($options.getAutoIncome.value) }}
      </div>
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
  getIncomePerClick,
  getAutoIncome,
  getEventBus,
} from '@/newStore';

const eventBus = getEventBus.value;

export default {
  getMoney,
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

    .money {
      display: flex;
      margin-bottom: 24px;

      &__count {
        margin-right: 6px;
      }
    }

    .income-per-click {
      margin-bottom: 24px;

      &__value {
        margin-right: 6px;
      }
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
