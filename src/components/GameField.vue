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
      <div>
        Crops: {{ crops }}&nbsp;
        <FloatText
          v-for="(item) in incomeTextItems"
          :key="item.id"
          :text="item.value"
          @expired="temp"
        />
      </div>
    </div>
    <div class="game-field__right-menu">
      dummy
    </div>
  </div>
</template>

<script>
import Scythe from '@/components/Scythe.vue';
import FloatText from '@/components/FloatText.vue';

export default {
  components: {
    Scythe,
    FloatText,
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
        value: `+${this.counter}`,
      });

      this.crops += this.counter;
      this.counter += 1;
    },

    temp() {
      this.incomeTextItems.shift();
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
      border-right: 2px solid $gray-300;
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
  }

  &__right-menu {
    @include lg {
      width: 25%;
      border-left: 2px solid $gray-300;
    }
  }
}
</style>
