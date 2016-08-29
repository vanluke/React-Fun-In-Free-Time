import { SIDEBAR_IS_OPEN, TOGGLE_MODAL } from './consts';

export const sideBarToggle = function(isVisible) {
  return {
    type: SIDEBAR_IS_OPEN,
    isVisible
  };
};

export const toggleModal = function(isOpen) {
  return {
    type: TOGGLE_MODAL,
    isOpen
  };
};
