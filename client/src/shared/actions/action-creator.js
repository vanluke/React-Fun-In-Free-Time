import { SIDEBAR_IS_OPEN } from './consts';

export const sideBarToggle = function(isVisible) {
  return {
    type: SIDEBAR_IS_OPEN,
    isVisible
  };
};
