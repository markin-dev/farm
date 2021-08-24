<template>
  <div class="game-field">
    <div class="game-field__left-menu">
      <AnimalsShop />
    </div>
    <div
      class="game-field__main-field"
    >
      <Scythe
        class="scythe"
        @mousedown-on-scythe="harvest"
      />
      <div class="crops">
        <div class="crops__count">
          Money: {{ $formatMoney($store.state.money) }}
        </div>
        <FloatText
          v-for="item in incomeTextItems"
          :key="item.id"
          :text="item.value"
          @expired="incomeTextItems.shift()"
        />
      </div>
      <div class="income-per-click">
        Income per click: {{ $formatMoney($store.state.incomePerClick) }}
      </div>
      <div class="auto-income">
        <div class="auto-income__value">
          Auto income: {{ $formatMoney($store.state.autoIncome) }}
        </div>
        <FloatText
          v-for="item in autoIncomeTextItems"
          :key="item.id"
          :text="item.value"
          @expired="autoIncomeTextItems.shift()"
        />
      </div>
    </div>
    <div class="game-field__right-menu">
      <CropsShop />
    </div>
  </div>
</template>

<script>
import Scythe from '@/components/Scythe.vue';
import FloatText from '@/components/FloatText.vue';
import AnimalsShop from '@/components/AnimalsShop.vue';
import CropsShop from '@/components/CropsShop.vue';

export default {
  components: {
    Scythe,
    FloatText,
    AnimalsShop,
    CropsShop,
  },

  data() {
    return {
      crops: 0,
      incomeTextItems: [],
      autoIncomeTextItems: [],
    };
  },

  created() {
    this.$store.subscribeAction((action) => {
      if (action.type === 'addAutoIncomeMoney') {
        this.autoIncomeTextItems.push({
          id: Math.random(),
          value: `+${this.$formatMoney(this.$store.state.autoIncome * action.payload)}`,
        });
      }
    });
  },

  methods: {
    harvest() {
      this.incomeTextItems.push({
        id: Math.random(),
        value: `+${this.$formatMoney(this.$store.state.incomePerClick)}`,
      });

      this.$store.dispatch('harvest');
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
      width: 25%;
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

    .crops {
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

    .auto-income {
      display: flex;

      &__value {
        margin-right: 6px;
      }
    }
  }

  &__right-menu {
    @include lg {
      width: 25%;
      border-left: 1px solid $gray-300;
      border-right: 1px solid $gray-300;
    }
  }
}
</style>
