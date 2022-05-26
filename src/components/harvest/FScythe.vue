<template>
  <div class="scythe">
    <div
      class="scythe__button"
      @mousedown="harvest"
    />
    <ScytheSubstrate
      v-for="item in substrates"
      :key="item.id"
      class="scythe__substrate"
      @animation-end="shiftSubstrate"
    />
  </div>
</template>

<script setup>
import ScytheSubstrate from '@/components/harvest/ScytheSubstrate.vue';
import harvest from '@/components/harvest/harvestService';
import useSubstrate from '@/components/harvest/useSubstrate';

const { substrates, shiftSubstrate } = useSubstrate();
</script>

<style lang="scss" scoped>
.scythe {
  position: relative;
  width: 360px;
  height: 360px;
  user-select: none;
  touch-action: manipulation;

  &__button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 288px;
    height: 288px;
    top: 36px;
    left: 36px;
    background-color: $blue-300;
    background-image: url('~@/assets/images/scythe_color.png');
    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    transition-property: background-image;
    transition-duration: .2s;

    &:hover {
      background-color: $blue-200;
      background-image: url('~@/assets/images/scythe_white.png');
    }

    &:active {
      animation: pressed .3s;
    }
  }

  &__substrate{
    width: 288px;
    height: 288px;
    top: 36px;
    left: 36px;
  }
}

@keyframes pressed {
  50% {
    transform: scale(0.98);
  }
}
</style>
