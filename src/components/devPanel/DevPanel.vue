<template>
  <div
    class="dev-panel"
    :style="styleObject"
  >
    <DevPanelHeader
      :is-minimized="isMinimized"
      :height="HEADER_HEIGHT"
      @mousedown.self="startDrag"
      @close-button-click="$emit('close')"
      @minimize-button-click="toggleMinimized"
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

<script setup>
import { computed, ref, onMounted } from 'vue';
import DevPanelHeader from '@/components/devPanel/DevPanelHeader.vue';

const HEADER_HEIGHT = 32;
const offsetTop = ref(0);
const offsetLeft = ref(0);
const shiftX = ref(0);
const shiftY = ref(0);
const panelWidth = ref(300);
const panelHeight = ref(400);
const panelHeightForMaximize = ref(0);
const gapFromBounds = ref(8);
const isMinimized = ref(false);

const styleObject = computed(() => ({
  top: `${offsetTop.value}px`,
  left: `${offsetLeft.value}px`,
  width: `${panelWidth.value}px`,
  height: `${panelHeight.value}px`,
  minHeight: `${HEADER_HEIGHT + 32}px`,
}));

const isOutOfBoundsAlongX = computed(
  () => offsetLeft.value + panelWidth.value + gapFromBounds.value > window.innerWidth,
);
const isOutOfBoundsAlongY = computed(
  () => offsetTop.value + panelHeight.value + gapFromBounds.value > window.innerHeight,
);

function checkoutOfBoundsForDrag() {
  if (offsetLeft.value < gapFromBounds.value) {
    offsetLeft.value = gapFromBounds.value;
  }
  if (offsetTop.value < gapFromBounds.value) {
    offsetTop.value = gapFromBounds.value;
  }
  if (isOutOfBoundsAlongX.value) {
    offsetLeft.value = window.innerWidth - panelWidth.value - gapFromBounds.value;
  }
  if (isOutOfBoundsAlongY.value) {
    offsetTop.value = window.innerHeight - panelHeight.value - gapFromBounds.value;
  }
}

function checkoutOfBoundsForScale() {
  if (isOutOfBoundsAlongX.value) {
    panelWidth.value = window.innerWidth - offsetLeft.value - gapFromBounds.value;
  }
  if (isOutOfBoundsAlongY.value) {
    panelHeight.value = window.innerHeight - offsetTop.value - gapFromBounds.value;
  }
}

function setDefaultPanelPosition() {
  offsetTop.value = window.innerHeight - panelHeight.value;
  offsetLeft.value = 0;

  checkoutOfBoundsForDrag();
}

onMounted(() => {
  setDefaultPanelPosition();
});

function dragElement(event) {
  event.preventDefault();

  offsetLeft.value = event.clientX - shiftX.value;
  offsetTop.value = event.clientY - shiftY.value;

  checkoutOfBoundsForDrag();
}

function removeDocumentEvents() {
  document.onmouseup = null;
  document.onmousemove = null;
}

function startDrag(event) {
  document.onmousemove = dragElement;
  document.onmouseup = removeDocumentEvents;

  shiftX.value = event.clientX - offsetLeft.value;
  shiftY.value = event.clientY - offsetTop.value;
}

function scaleElement(event) {
  event.preventDefault();

  panelWidth.value = event.clientX - shiftX.value;
  panelHeight.value = event.clientY - shiftY.value;
  checkoutOfBoundsForScale();
}

function startScale(event) {
  document.onmousemove = scaleElement;
  document.onmouseup = removeDocumentEvents;

  shiftX.value = event.clientX - panelWidth.value;
  shiftY.value = event.clientY - panelHeight.value;
}

function toggleMinimized() {
  if (isMinimized.value) {
    offsetTop.value -= panelHeightForMaximize.value - HEADER_HEIGHT;
    panelHeight.value = panelHeightForMaximize.value;
  } else {
    offsetTop.value += panelHeight.value - HEADER_HEIGHT;
    panelHeightForMaximize.value = panelHeight.value;
    panelHeight.value = HEADER_HEIGHT;
  }

  isMinimized.value = !isMinimized.value;
  checkoutOfBoundsForDrag();
}
</script>

<style lang="scss" scoped>
.dev-panel {
  position: fixed;
  display: flex;
  flex-direction: column;
  min-width: 92px;
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
