<template>
  <div class="game-field">
    <div class="game-field__left-menu" />
    <div
      class="game-field__main-field"
    >
      <Scythe
        class="scythe"
        @click="harvest"
      />
      <div>Crops: {{ crops }}</div>
    </div>
    <div class="game-field__right-menu" />
  </div>
</template>

<script>
import Scythe from '@/components/Scythe.vue';

export default {
  components: {
    Scythe,
  },

  data() {
    return {
      crops: 0,
    };
  },

  methods: {
    harvest() {
      this.crops += 1;
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
