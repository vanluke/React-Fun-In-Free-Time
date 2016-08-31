import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './_hamburger.scss';
import './_sidebar.scss';

const generateNavList = (navCollection) => {
  return navCollection.map((nav, ind) => {
    return (<li key={ind} className="sidebar__nav__list__li">
      <Link
        className="sidebar__nav__list__li__href"
        activeClassName="sidebar__nav__list__li__href--active"
        to={nav.link}>{nav.text}</Link>
    </li>);
  });
};

const Sidebar = props => {
  const { isVisible, toggleSideBar, title, navCollection } = props;
  return (<div className={isVisible ? 'sidebar active' : 'sidebar'}>
    <div id="sidebar__hamburger" onClick={toggleSideBar}>
      <div
        className={isVisible
            ? 'sidebar__hamburger__button open'
            : 'sidebar__hamburger__button'}
        data-menu="2">
        <div className="icon"></div>
      </div>
    </div>
    <nav className="sidebar__nav">
      <div className="sidebar__nav__title">
        {title}
      </div>
      <ul className="sidebar__nav__list">
        {generateNavList(navCollection)}
      </ul>
    </nav>
  </div>);
};

Sidebar.propTypes = {
  isVisible: PropTypes.bool,
  toggleSideBar: PropTypes.func,
  title: PropTypes.string.isRequired,
  navCollection: PropTypes.array.isRequired
};

export default Sidebar;
