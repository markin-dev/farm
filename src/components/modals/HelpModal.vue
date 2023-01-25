<template>
  <FModal
    class="help-modal"
    :is-open="isOpen"
    title="Help"
    @close="emits('close')"
  >
    <div class="help-modal__content">
      <p>This is a simple farm themed clicker game.</p>
      <p>
        Your goal is to reach a total farm cost of $10,000,000,000. You can buy crops to increase
        income per click or animals to increase auto income.
      </p>
      <p>
        Each click can have a different rarity, which will increase the click income by a certain
        multiplier:
      </p>
      <ul>
        <li class="global__text-color_common">
          Common (x1)
        </li>
        <li class="global__text-color_uncommon">
          Uncommon (x2, 20% chance)
        </li>
        <li class="global__text-color_rare">
          Rare (x5, 10% chance)
        </li>
        <li class="global__text-color_epic">
          Epic (x20, 5% chance)
        </li>
        <li class="global__text-color_legendary">
          Legendary (x100, 2% chance)
        </li>
      </ul>
      <p>Good luck!</p>
    </div>
  </FModal>
</template>

<script setup>
import FModal from '@/components/modals/FModal.vue';

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['close']);
</script>

<style lang="scss" scoped>
.help-modal {
  &__content {
    max-width: 600px;

    p {
      margin-bottom: 12px;
    }
  }
}
</style>
