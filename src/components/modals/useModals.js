import useShowHide from '@/composables/useShowHide';

const {
  isShowed: isAboutModalShown,
  show: openAboutModal,
  hide: closeAboutModal,
} = useShowHide();

function useModals() {
  return {
    isAboutModalShown,
    openAboutModal,
    closeAboutModal,
  };
}

export default useModals;
