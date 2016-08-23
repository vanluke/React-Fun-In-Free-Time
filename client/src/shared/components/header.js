import React, { PropTypes } from 'react';

const Header = props => {
  const { isVisible, toggleSideBar } = props;
  return (<div className={isVisible ? 'sidebar active' : 'sidebar'}>
    <div id="sidebar__hamburger" onClick={toggleSideBar}>
      <div
        className={isVisible
            ? 'sidebar__hamburger__button open'
            : 'sidebar__hamburger__button'}
        data-menu="2">
        <div className="icon"></div>
      </div>
      {/* <button
        id="sidebar__hamburger__button"
        className="sidebar__hamburger__button"></button> */}
    </div>
    <nav className="sidebar__nav">
      <div className="sidebar__nav__title">
        Sidebar
      </div>
      <ul className="sidebar__nav__list">
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <a>Statistics</a>
        </li>
        <li>
          <a className="active">Milestones</a>
        </li>
        <li>
          <a>Experiments</a>
        </li>
        <li>
          <a>Previews</a>
        </li>
        <li>
          <a>Assets</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </nav>
  </div>);
};

Header.propTypes = {
  isVisible: PropTypes.bool,
  toggleSideBar: PropTypes.func
};

export default Header;
