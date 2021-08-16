<template>
  <div
    v-if="!off"
    class="dev-panel"
    :style="styleObject"
  >
    <DevPanelHeader
      :is-minimized="isMinimized"
      @mousedown.self="startDrag"
      @toggle-minimized="toggleMinimized"
      @default-position-button-click="setDefaultPanelPosition"
    />
    <div
      v-if="!isMinimized"
      class="dev-panel__content"
    >
      <slot />
      <div
        class="dev-panel__scale"
        @mousedown="startScale"
      />
    </div>
  </div>
</template>

<script>
import DevPanelHeader from '@/components/DevPanelHeader.vue';

export default {
  components: {
    DevPanelHeader,
  },

  props: {
    off: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      offsetTop: 0,
      offsetLeft: 0,
      shiftX: 0,
      shiftY: 0,
      panelWidth: 300,
      panelHeight: 400,
      panelHeightForMaximize: 0,
      gapFromBounds: 8,
      isMinimized: false,
    };
  },

  computed: {
    styleObject() {
      return {
        top: `${this.offsetTop}px`,
        left: `${this.offsetLeft}px`,
        width: `${this.panelWidth}px`,
        height: `${this.panelHeight}px`,
      };
    },

    isOutOfBoundsAlongX() {
      return this.offsetLeft + this.panelWidth + this.gapFromBounds > window.innerWidth;
    },

    isOutOfBoundsAlongY() {
      return this.offsetTop + this.panelHeight + this.gapFromBounds > window.innerHeight;
    },
  },

  watch: {
    panelWidth(width) {
      if (width < 64) {
        this.panelWidth = 64;
      }
    },

    panelHeight(height) {
      if (height < 64 && !this.isMinimized) {
        this.panelHeight = 64;
      }
    },
  },

  mounted() {
    this.setDefaultPanelPosition();
  },

  methods: {
    setDefaultPanelPosition() {
      this.offsetTop = window.innerHeight - this.panelHeight;
      this.offsetLeft = 0;

      this.checkoutOfBoundsForDrag();
    },

    startDrag(event) {
      document.onmousemove = this.dragElement;
      document.onmouseup = this.removeDocumentEvents;

      this.shiftX = event.clientX - this.offsetLeft;
      this.shiftY = event.clientY - this.offsetTop;
    },

    dragElement(event) {
      event.preventDefault();

      this.offsetLeft = event.clientX - this.shiftX;
      this.offsetTop = event.clientY - this.shiftY;

      this.checkoutOfBoundsForDrag();
    },

    startScale(event) {
      document.onmousemove = this.scaleElement;
      document.onmouseup = this.removeDocumentEvents;

      this.shiftX = event.clientX - this.panelWidth;
      this.shiftY = event.clientY - this.panelHeight;
    },

    scaleElement(event) {
      event.preventDefault();

      this.panelWidth = event.clientX - this.shiftX;
      this.panelHeight = event.clientY - this.shiftY;

      this.checkoutOfBoundsForScale();
    },

    removeDocumentEvents() {
      document.onmouseup = null;
      document.onmousemove = null;
    },

    checkoutOfBoundsForDrag() {
      if (this.offsetLeft < this.gapFromBounds) {
        this.offsetLeft = this.gapFromBounds;
      }
      if (this.offsetTop < this.gapFromBounds) {
        this.offsetTop = this.gapFromBounds;
      }
      if (this.isOutOfBoundsAlongX) {
        this.offsetLeft = window.innerWidth - this.panelWidth - this.gapFromBounds;
      }
      if (this.isOutOfBoundsAlongY) {
        this.offsetTop = window.innerHeight - this.panelHeight - this.gapFromBounds;
      }
    },

    checkoutOfBoundsForScale() {
      if (this.isOutOfBoundsAlongX) {
        this.panelWidth = window.innerWidth - this.offsetLeft - this.gapFromBounds;
      }
      if (this.isOutOfBoundsAlongY) {
        this.panelHeight = window.innerHeight - this.offsetTop - this.gapFromBounds;
      }
    },

    toggleMinimized() {
      if (this.isMinimized) {
        this.offsetTop -= this.panelHeightForMaximize - 32;
        this.panelHeight = this.panelHeightForMaximize;
      } else {
        this.offsetTop += this.panelHeight - 32;
        this.panelHeightForMaximize = this.panelHeight;
        this.panelHeight = 32;
      }

      this.isMinimized = !this.isMinimized;
      this.checkoutOfBoundsForDrag();
    },
  },
};
</script>

<style lang="scss" scoped>
.dev-panel {
  position: fixed;
  display: flex;
  flex-direction: column;
  min-width: 64px;
  min-height: 64px;
  z-index: 9999;

  &__content {
    padding: 16px;
    background-color: $gray-200;
    height: 100%;
    overflow: scroll;
  }

  &__scale {
    position: absolute;
    width: 12px;
    height: 12px;
    bottom: 0;
    right: 0;
    border-right: 4px solid $gray-500;
    border-bottom: 4px solid $gray-500;
    cursor: nwse-resize;
  }
}
</style>
