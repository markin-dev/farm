<template>
  <div class="game-field">
    <div class="game-field__left-menu">
      <AnimalsShop />
    </div>
    <div
      class="game-field__main-field"
    >
      <Scythe class="scythe" />
      <div class="money">
        Money: {{ $formatMoney($store.state.money) }}
      </div>
      <div class="income-per-click">
        Income per click: {{ $formatMoney($store.state.incomePerClick) }}
      </div>
      <div
        ref="autoIncome"
        style="outline: 1px solid green"
      >
        Auto income: {{ $formatMoney($store.state.autoIncome) }}
      </div>
    </div>
    <div class="game-field__right-menu">
      <CropsShop />
    </div>
  </div>
</template>

<script>
import Scythe from '@/components/Scythe.vue';
import AnimalsShop from '@/components/AnimalsShop.vue';
import CropsShop from '@/components/CropsShop.vue';

export default {
  components: {
    Scythe,
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
    this.$store.subscribeAction((action) => {
      if (action.type === 'addAutoIncomeMoney') {
        const coords = this.$refs.autoIncome.getBoundingClientRect();

        this.floatTextProvider.renderFloatTextItem({
          value: `+${this.$formatMoney(this.$store.state.autoIncome * action.payload)}`,
          x: coords.right,
          y: coords.top,
        });
      }
    });
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
