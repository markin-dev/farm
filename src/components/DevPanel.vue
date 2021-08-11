<template>
  <div
    ref="devPanel"
    class="dev-panel"
    :style="styleObject"
  >
    <div style="overflow: hidden">
      <div
        class="dev-panel__header"
        @mousedown="startDrag"
      />
      <div class="dev-panel__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offsetTop: 0,
      offsetLeft: 0,
      shiftX: 0,
      shiftY: 0,
    };
  },

  computed: {
    styleObject() {
      return {
        top: `${this.offsetTop}px`,
        left: `${this.offsetLeft}px`,
      };
    },
  },

  methods: {
    startDrag(event) {
      document.onmousemove = this.dragElement;
      document.onmouseup = this.stopdrag;

      this.shiftX = event.clientX - this.offsetLeft;
      this.shiftY = event.clientY - this.offsetTop;
    },

    dragElement(event) {
      event.preventDefault();

      this.offsetLeft = event.clientX - this.shiftX;
      this.offsetTop = event.clientY - this.shiftY;

      this.checkoutOfBounds();
    },

    checkoutOfBounds() {
      const devPanelWidth = this.$refs.devPanel.clientWidth;
      const devPanelHeight = this.$refs.devPanel.clientHeight;

      if (this.offsetLeft < 0) {
        this.offsetLeft = 0;
      }
      if (this.offsetTop < 0) {
        this.offsetTop = 0;
      }
      if (this.offsetLeft + devPanelWidth > window.innerWidth) {
        this.offsetLeft = window.innerWidth - devPanelWidth;
      }
      if (this.offsetTop + devPanelHeight > window.innerHeight) {
        this.offsetTop = window.innerHeight - devPanelHeight;
      }
    },

    stopdrag() {
      document.onmouseup = null;
      document.onmousemove = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.dev-panel {
  position: fixed;
  padding: 8px;
  z-index: 9999;

  &__header {
    height: 32px;
    width: 100%;
    background-color: $gray-300;
    cursor: move;
  }

  &__content {
    max-width: 400px;
    max-height: 700px;
    padding: 16px;
    background-color: $gray-200;
    overflow: scroll;
  }
}
</style>
