<template>
  <div class="header">
    <h1>Farm</h1>
    <div class="actions">
      <FLink
        class="actions__item"
        :text="'Save'"
        @click="manualSave"
      />
    </div>
  </div>
</template>

<script>
import FLink from '@/components/FLink.vue';

import { save } from '@/saveLoad';

export default {
  components: {
    FLink,
  },

  methods: {
    manualSave() {
      save(this.$store);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  height: 64px;
  border-bottom: 1px solid $gray-300;
  background-color: $gray-50;
  box-sizing: border-box;

  .actions {
    &__item:not(:last-child) {
      margin-right: 16px;
    }
  }
}
</style>
