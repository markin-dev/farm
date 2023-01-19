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

const {
  isShowed: isCongratulationsModalShown,
  show: openCongratulationsModal,
  hide: closeCongratulationsModal,
} = useShowHide();

function useModals() {
  return {
    isAboutModalShown,
    openAboutModal,
    closeAboutModal,
    isHelpModalShown,
    openHelpModal,
    closeHelpModal,
    isCongratulationsModalShown,
    openCongratulationsModal,
    closeCongratulationsModal,
  };
}

export default useModals;
