import React, { PropTypes, PureComponent } from 'react';
import { sideBarToggle } from '../../actions';
import './_header.scss';
import './_app.scss';
import './_hamburger.scss';
import Header from './header';

class App extends PureComponent {
  constructor(props) {
    super(...props);
  }

  toggleSideBar() {
    const { dispatch, isVisible } = this.props;
    dispatch(sideBarToggle(isVisible));
  }

  render() {
    const { isVisible } = this.props;
    return (<div className="wrapper">
      <Header
        toggleSideBar={this.toggleSideBar.bind(this)}
        isVisible={isVisible} />
      <div className="content">{this.props.children}</div>
    </div>);
  }

  static propTypes = {
    children: PropTypes.object.isRequired,
    isVisible: PropTypes.bool
  };
}

// const App = props => {
//
// };

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;
