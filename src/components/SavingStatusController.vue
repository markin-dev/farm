<template>
  <SavingStatusIcon
    v-if="isShow"
    @animation-end="hideStatusIcon"
  />
</template>

<script>
import SavingStatusIcon from '@/components/SavingStatusIcon.vue';

import { getEventBus } from '@/store';

const eventBus = getEventBus.value;

export default {
  name: 'App',

  components: {
    SavingStatusIcon,
  },

  data() {
    return {
      isShow: false,
    };
  },

  mounted() {
    eventBus.on('game-saved', this.onGameSaved);
  },

  unmounted() {
    eventBus.off('game-saved', this.onGameSaved);
  },

  methods: {
    showStatusIcon() {
      this.isShow = true;
    },

    hideStatusIcon() {
      this.isShow = false;
    },

    async onGameSaved() {
      this.hideStatusIcon();
      await this.$nextTick();
      this.showStatusIcon();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;

  @include lg {
    max-width: 1200px;
  }
}
</style>
