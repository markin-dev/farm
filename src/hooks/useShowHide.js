import { ref } from 'vue';

function useShowHide() {
  const isShowed = ref(false);

  function show() {
    isShowed.value = true;
  }

  function hide() {
    isShowed.value = false;
  }

  return {
    isShowed,
    show,
    hide,
  };
}

export default useShowHide;
