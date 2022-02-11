<template>
  <div
    :style="scytheStyleObject"
    class="scythe"
  >
    <div
      :style="iconStyleObject"
      class="scythe__icon"
      @mousedown="onMousedown"
    />
    <Substrate
      v-for="item in substrates"
      :key="item.id"
      :style-object="iconStyleObject"
      @expired="substrates.shift()"
    />
  </div>
</template>

<script>
import Substrate from '@/components/Substrate.vue';

export default {
  components: {
    Substrate,
  },

  props: {
    size: {
      type: Number,
      default: 360,
    },
  },

  data() {
    return {
      substrates: [],
    };
  },

  computed: {
    scytheStyleObject() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      };
    },

    iconStyleObject() {
      const iconSize = this.size * 0.8;
      const iconIndent = (this.size - iconSize) / 2;

      return {
        top: `${iconIndent}px`,
        left: `${iconIndent}px`,
        width: `${iconSize}px`,
        height: `${iconSize}px`,
      };
    },
  },

  methods: {
    onMousedown(event) {
      this.substrates.push({
        id: Math.random(),
      });
      this.$emit('mousedown-on-scythe', event);
    },
  },
};
</script>

<style lang="scss" scoped>
.scythe {
  position: relative;
  user-select: none;
  touch-action: manipulation;

  &__icon {
    position: absolute;
    background-image: url('~@/assets/scythe.png');
    background-size: 80%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: $blue-200;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    transition: opacity .2s;

    &:hover {
      opacity: .3;
    }

    &:active {
      animation: pressed .3s;
    }
  }
}

@keyframes pressed {
  50% {
    transform: scale(0.98);
  }
}
</style>
