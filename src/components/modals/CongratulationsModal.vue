<template>
  <div
    v-if="isOpen"
    class="congratulations-modal"
    @close="emits('close')"
  >
    <FireworkWrapper class="congratulations-modal__firework-wrapper">
      <div class="congratulations-modal__content">
        <h1
          class="congratulations-modal__title"
          aria-label="Wash your hands"
        >
          <span
            v-for="char in ANIMATED_TEXT.split('')"
            :key="`${char}-${Math.random()}`"
          >
            {{ char }}
          </span>
        </h1>

        <button
          type="button"
          @click="clearSave"
        >
          restart
        </button>
      </div>
    </FireworkWrapper>
  </div>
</template>

<script setup>
import FireworkWrapper from '@/components/modals/FireworkWrapper.vue';
import { clearSave } from '@/store/saveLoad';

const ANIMATED_TEXT = 'You are the best farmer in the world!';

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['close']);
</script>

<style lang="scss" scoped>
.congratulations-modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;

  &__firework-wrapper {
    height: 100%;
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @function textShadow($precision, $size, $color){
    $value: null;
    $offset: 0;
    $length: calc($size * (1 / $precision) - 1);

    @for $i from 0 through $length {
      $offset: $offset + $precision;
      $shadow: $offset + px $offset + px $color;
      $value: append($value, $shadow, comma);
    }

    @return $value;
  }

  &__title {
    font-size: 65px;
    text-transform: uppercase;
    font-family: "Archivo Black", "Archivo", sans-serif;
    font-weight: normal;
    display: block;
    text-align: center;

    span {
      position: relative;
      color: #5362F6;
      text-shadow: textShadow(0.25, 6, #E485F8);
      animation: scatter 1.75s infinite;
    }

    span:nth-child(2n) {
      color: #ED625C;
      text-shadow: textShadow(0.25, 6, #F2A063);
      animation-delay: 0.3s;
    }

    span:nth-child(3n) {
      color: #FFD913;
      text-shadow: textShadow(0.25, 6, #6EC0A9);
      animation-delay: 0.15s;
    }

    span:nth-child(5n) {
      color: #555BFF;
      text-shadow: textShadow(0.25, 6, #E485F8);
      animation-delay: 0.4s;
    }

    span:nth-child(7n) {
      color: #FF9C55;
      text-shadow: textShadow(0.25, 6, #FF5555);
      animation-delay: 0.25s;
    }
  }

  @keyframes scatter {
    0% {
      top: 0;
    }
    50% {
      top: -10px;
    }
    100% {
      top: 0;
    }
  }
}
</style>
