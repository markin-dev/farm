<template>
  <FModal
    class="about-modal"
    :is-open="isOpen"
    title="Farm"
    @close="emits('close')"
  >
    <p>Simple farming clicker based on Vue</p>
    <a
      href="https://github.com/markin-dev/farm"
      target="_blank"
    >
      GitHub
    </a>
    <div class="about-modal__attribution">
      <p>Attribution:</p>
      <a
        v-for="linkData in ATTRIBUTION_LINKS_DATA"
        :key="linkData.text"
        target="_blank"
        :title="linkData.title"
        :href="linkData.href"
      >
        {{ linkData.text }}
      </a>
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
const ATTRIBUTION_LINKS_DATA = [
  {
    text: 'Harvest icons created by Eucalyp - Flaticon',
    title: 'harvest icons',
    href: 'https://www.flaticon.com/free-icons/harvest',
  },
  {
    text: 'Chicken icons created by Freepik - Flaticon',
    title: 'chicken icons',
    href: 'https://www.flaticon.com/free-icons/chicken',
  },
  {
    text: 'Rabbit icons created by Freepik - Flaticon',
    title: 'rabbit icons',
    href: 'https://www.flaticon.com/free-icons/rabbit',
  },
  {
    text: 'Pig icons created by dDara - Flaticon',
    title: 'pig icons',
    href: 'https://www.flaticon.com/free-icons/pig',
  },
  {
    text: 'Goat icons created by Freepik - Flaticon',
    title: 'goat icons',
    href: 'https://www.flaticon.com/free-icons/goat',
  },
  {
    text: 'Cow icons created by surang - Flaticon',
    title: 'cow icons',
    href: 'https://www.flaticon.com/free-icons/cow',
  },
  {
    text: 'Wheat icons created by DinosoftLabs - Flaticon',
    title: 'wheat icons',
    href: 'https://www.flaticon.com/free-icons/wheat',
  },
  {
    text: 'Potato icons created by Freepik - Flaticon',
    title: 'potato icons',
    href: 'https://www.flaticon.com/free-icons/potato',
  },
  {
    text: 'Vegetable icons created by Freepik - Flaticon',
    title: 'vegetable icons',
    href: 'https://www.flaticon.com/free-icons/vegetable',
  },
  {
    text: 'Corn icons created by mangsaabguru - Flaticon',
    title: 'corn icons',
    href: 'https://www.flaticon.com/free-icons/corn',
  },
  {
    text: 'Fruit icons created by Freepik - Flaticon',
    title: 'fruit icons',
    href: 'https://www.flaticon.com/free-icons/fruit',
  },
];
</script>

<style lang="scss" scoped>
.about-modal {
  p {
    margin-bottom: 16px;
  }

  a {
    display: block;
    margin-bottom: 16px;
  }

  &__attribution {
    p {
      margin-bottom: 8px;
    }

    a {
      margin-bottom: 8px;
      font-size: 12px;
    }
  }
}
</style>
