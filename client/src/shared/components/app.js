import React, { PropTypes, PureComponent } from 'react';
import { sideBarToggle, toggleUserInfoNav } from '../actions';
import './_app.scss';
import Header from './header';
import Sidebar from './sidebar';
import NavInfo from './nav-list';
import UserInfo from './user-info';
import './_nav-user-info.scss';

const navCollection = [
  { text: 'Dashboard', link: '/dashboard' },
  { text: 'Home', link: '/home' },
  { text: 'News', link: '/news' },
  { text: 'Login', link: '/Login' }
];

class App extends PureComponent {
  constructor(props) {
    super(...props);
  }

  toggleSideBar() {
    const { dispatch, isVisible } = this.props;
    dispatch(sideBarToggle(isVisible));
  }

  toggleUserInfoNav() {
    const { userInfoNav, dispatch } = this.props;
    dispatch(toggleUserInfoNav(userInfoNav));
  }

  render() {
    const { isVisible, userInfoNav } = this.props;
    const user = {
      name: 'zenon kozminski'
    };
    return (<div className="container">
      <UserInfo
        user={user}
        isOpen={userInfoNav}
        onClick={this.toggleUserInfoNav.bind(this)}>
        <NavInfo user={user}></NavInfo>
      </UserInfo>
      <Header>
        <Sidebar
          title="Sidebar"
          navCollection={navCollection}
          toggleSideBar={this.toggleSideBar.bind(this)}
          isVisible={isVisible} />
        <div>{this.props.children}</div>
      </Header>
    </div>);
  }

  static propTypes = {
    children: PropTypes.object.isRequired,
    isVisible: PropTypes.bool,
    user: PropTypes.object
  };
}

export default App;
