import { connect } from 'react-redux';
import { default as AppComponent } from './app';

export { ApplicationModal } from './modal';

function mapStateToProps(state) {
  const { sideBarReducer, userNavInfoReducer } = state;
  return {
    isVisible: sideBarReducer.isVisible,
    userInfoNavIsOpen: userNavInfoReducer.isOpen
  };
}

export const App = connect(mapStateToProps)(AppComponent);
