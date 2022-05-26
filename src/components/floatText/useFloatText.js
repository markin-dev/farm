import { ref, computed } from 'vue';

const floatTextItems = ref([]);

function useFloatText() {
  function addFloatTextItem(item) {
    floatTextItems.value.push({
      id: Math.random(),
      value: item.value || 'default text',
      coords: item.coords,
      type: item.type,
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

export const floatTextTypes = {
  COMMON: 'common',
  UNCOMMON: 'uncommon',
  RARE: 'rare',
  EPIC: 'epic',
  LEGENDARY: 'legendary',
  AUTO_INCOME: 'auto-income',
  SHOP_PURCHASE: 'shop-purchase',
};

export default useFloatText;
