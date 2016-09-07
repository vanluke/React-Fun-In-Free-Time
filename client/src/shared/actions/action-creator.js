import { SIDEBAR_IS_OPEN, TOGGLE_MODAL, TOGGLE_USER_INFO_NAV } from './consts';

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

export const toggleUserInfoNav = function(isOpen) {
  return {
    type: TOGGLE_USER_INFO_NAV,
    isOpen
  };
};
