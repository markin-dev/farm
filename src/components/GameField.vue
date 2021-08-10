<template>
  <div class="game-field">
    <div class="game-field__left-menu">
      dummy
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
    </div>
    <div class="game-field__right-menu">
      <CropsShop />
    </div>
  </div>
</template>

<script>
import Scythe from '@/components/Scythe.vue';
import FloatText from '@/components/FloatText.vue';
import CropsShop from '@/components/CropsShop.vue';

export default {
  components: {
    Scythe,
    FloatText,
    CropsShop,
  },

  data() {
    return {
      crops: 0,
      incomeTextItems: [],
      counter: 0,
    };
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

      &__count {
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
