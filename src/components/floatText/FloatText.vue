<template>
  <transition
    appear
    name="float-text"
  >
    <span
      :class="[
        'float-text',
        `float-text_${type}`,
      ]"
    >
      {{ text }}
    </span>
  </transition>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },

  text: {
    type: String,
    default: '',
  },

  type: {
    type: String,
    default: 'common',
  },
});
const emits = defineEmits(['animation-end']);

onMounted(() => {
  setTimeout(() => {
    emits('animation-end', props.id);
  }, 600);
});

</script>

<style lang="scss" scoped>
.float-text {
  pointer-events: none;
  user-select: none;
  transition: all .6s;
  box-sizing: border-box;

  &_common {
    font-size: 16px;
  }

  &_uncommon {
    font-size: 18px;
    color: $green-500;
  }

  &_rare {
    font-size: 20px;
    color: $blue-500;
  }

  &_epic {
    font-size: 22px;
    color: $purple-500;
  }

  &_legendary {
    font-size: 24px;
    color: $yellow-600;
  }

  &_auto-income {
    font-size: 16px;
    color: $green-500;
  }

  &_shop-purchase {
    font-size: 24px;
    color: $green-500;
  }

  &-enter-to {
    opacity: 0;
    transform: translateY(-30px);
  }
}
</style>
