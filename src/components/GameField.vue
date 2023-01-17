<template>
  <div class="game-field">
    <div class="game-field__left-menu">
      <FShop
        title="Animals Shop"
        :items="animals"
        income-text="auto income"
        @shop-item-click="buyAnimal"
      />
    </div>
    <div
      class="game-field__main-field"
    >
      <h3>Total farm cost: {{ $formatMoney(totalMoney) }}</h3>
      <FScythe class="scythe" />
      <p>Money: {{ $formatMoney(money) }}</p>
      <p>Income per click: {{ $formatMoney(incomePerClick) }}</p>
      <p ref="autoIncomeRef">
        Auto income: {{ $formatMoney(autoIncome) }}
      </p>
    </div>
    <div class="game-field__right-menu">
      <FShop
        title="Crops Shop"
        :items="crops"
        income-text="per click"
        @shop-item-click="buyCrop"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { buyAnimal, buyCrop } from '@/store/actions';
import useStore from '@/store/useStore';
import useFloatText, { floatTextTypes } from '@/components/floatText/useFloatText';
import FScythe from '@/components/harvest/FScythe.vue';
import FShop from '@/components/shops/FShop.vue';
import formatMoney from '@/utils/formatMoney';
import getAbsoluteCoords from '@/utils/getAbsoluteCoords';

const {
  money,
  totalMoney,
  incomePerClick,
  autoIncome,
  eventBus,
  animals,
  crops,
} = useStore();
const { addFloatTextItem } = useFloatText();
const autoIncomeRef = ref(null);

function renderAutoIncomeFloatText(value) {
  const autoIncomeRect = autoIncomeRef.value.getBoundingClientRect();
  const customYOffset = 6;

  addFloatTextItem({
    value: `+${formatMoney(value)}`,
    coords: getAbsoluteCoords(
      autoIncomeRect.right + customYOffset,
      autoIncomeRect.top,
    ),
    type: floatTextTypes.AUTO_INCOME,
  });
}

function onAddedAutoIncome(event) {
  if (!event) {
    return;
  }

  renderAutoIncomeFloatText(event);
}

onMounted(() => {
  eventBus.value.on('added-auto-income', onAddedAutoIncome);
});

onUnmounted(() => {
  eventBus.value.off('added-auto-income', onAddedAutoIncome);
});
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
