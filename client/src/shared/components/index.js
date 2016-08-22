import { connect } from 'react-redux';
import { default as AppComponent } from './app';

function mapStateToProps(state) {
  const { sideBarReducer } = state;
  return {
    isVisible: sideBarReducer.isVisible
  };
}

export const App = connect(mapStateToProps)(AppComponent);
