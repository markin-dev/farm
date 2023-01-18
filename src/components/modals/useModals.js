import useShowHide from '@/composables/useShowHide';

const {
  isShowed: isAboutModalShown,
  show: openAboutModal,
  hide: closeAboutModal,
} = useShowHide();

const {
  isShowed: isHelpModalShown,
  show: openHelpModal,
  hide: closeHelpModal,
} = useShowHide();

function useModals() {
  return {
    isAboutModalShown,
    openAboutModal,
    closeAboutModal,
    isHelpModalShown,
    openHelpModal,
    closeHelpModal,
  };
}

export default useModals;
