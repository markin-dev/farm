import { ref, computed } from 'vue';

const floatTextItems = ref([]);

function useFloatText() {
  function addFloatTextItem(event) {
    floatTextItems.value.push({
      id: Math.random(),
      value: event.value || 'default text',
      coords: event.coords,
      fontSize: event.fontSize || 16,
    });
  }

  function removeFloatTextItem(id) {
    const itemIndex = floatTextItems.value.findIndex((i) => i.id === id);
    floatTextItems.value.splice(itemIndex, 1);
  }

  return {
    floatTextItems: computed(() => floatTextItems.value),
    addFloatTextItem,
    removeFloatTextItem,
  };
}

export default useFloatText;
