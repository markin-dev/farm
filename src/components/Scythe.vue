<template>
  <div
    class="scythe"
    @click="onClick"
  >
    <div
      class="scythe__icon"
      :class="classes"
    />

    <transition name="scythe__substrate">
      <div
        v-if="isSubstrate"
        class="scythe__substrate"
      />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSubstrate: false,
      classes: [],
    };
  },

  methods: {
    onClick() {
      this.isSubstrate = true;

      this.$nextTick(() => {
        this.isSubstrate = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.scythe {
  position: relative;
  width: 308px;
  height: 308px;

  &__icon {
    position: absolute;
    top: 16px;
    left: 16px;
    width: 256px;
    height: 256px;
    background-image: url('~@/assets/scythe.png');
    background-size: 80%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: $blue-200;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;

    &:hover {
      background-color: $blue-300;
    }

    &:active {
      animation: pressed .3s;
    }
  }

  &__substrate {
    position: absolute;
    top: 16px;
    left: 16px;
    width: 256px;
    height: 256px;
    background-color: $blue-200;
    border-radius: 50%;

    &-leave-to {
      animation: substrateScaleUp 1s;
    }
  }
}

@keyframes pressed {
  50% {
    transform: scale(0.9);
  }
}

@keyframes substrateScaleUp {
  to {
    opacity: 0;
    transform: scale(1.2);
  }
}
</style>
