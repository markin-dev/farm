<template>
  <div class="game-field">
    <div class="game-field__left-menu">
      <AnimalsShop />
    </div>
    <div
      class="game-field__main-field"
    >
      <h3>Total farm cost: {{ $formatMoney(getTotalMoney) }}</h3>
      <FScythe class="scythe" />
      <p>Money: {{ $formatMoney(getMoney) }}</p>
      <p>Income per click: {{ $formatMoney(getIncomePerClick) }}</p>
      <p ref="autoIncomeRef">
        Auto income: {{ $formatMoney(getAutoIncome) }}
      </p>
    </div>
    <div class="game-field__right-menu">
      <CropsShop />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import {
  getMoney,
  getTotalMoney,
  getIncomePerClick,
  getAutoIncome,
  getEventBus,
} from '@/store';
import useFloatText from '@/components/floatText/useFloatText';
import FScythe from '@/components/FScythe.vue';
import AnimalsShop from '@/components/shops/AnimalsShop.vue';
import CropsShop from '@/components/shops/CropsShop.vue';
import formatMoney from '@/utils/formatMoney';
import getAbsoluteCoords from '@/utils/getAbsoluteCoords';

const { addFloatTextItem } = useFloatText();
const eventBus = getEventBus.value;
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
    fontSize: 16,
  });
}

function onAddedAutoIncome(event) {
  if (!event) {
    return;
  }

  renderAutoIncomeFloatText(event);
}

onMounted(() => {
  eventBus.on('added-auto-income', onAddedAutoIncome);
});

onUnmounted(() => {
  eventBus.off('added-auto-income', onAddedAutoIncome);
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
