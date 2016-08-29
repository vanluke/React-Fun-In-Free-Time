import { connect } from 'react-redux';
import { default as AppComponent } from './app';

export { ApplicationModal } from './modal';

function mapStateToProps(state) {
  console.log(state);
  const { sideBarReducer } = state;
  return {
    isVisible: sideBarReducer.isVisible
  };
}

export const App = connect(mapStateToProps)(AppComponent);
