import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const genereteNavigationForLoggedUser = () => {
  return (<div className="container__user__nav">
    <Link to="/home" id="nav__settings">
      <span className="container__user__span fa fa-cogs"></span>
      Settings
    </Link>
    <Link to="/home" id="nav__currency">
      <span className="container__user__span">$</span>
      Currency
    </Link>
    <Link to="/home" id="nav__support">
      <span className="container__user__span fa fa-life-ring"></span>
      Support
    </Link>
    <Link to="/home" id="nav__logout">
      <span className="container__user__span fa fa-sign-out"></span>
      Logout
    </Link>
  </div>);
};

export const genereteNavigationForAnonymouse = () => {
  return (<div className="container__user__nav">
    <Link to="/login" id="nav__login">
      <span className="container__user__span fa fa-sign-in"></span>
      <label
        className="container__user__label"
        htmlFor="nav__login">Login</label>
    </Link>
  </div>);
};

const NavList = props => {
  const { user } = props;
  if (!!user) {
    return (<div>{genereteNavigationForLoggedUser()}</div>);
  }
  return (<div>{genereteNavigationForAnonymouse()}</div>);
};

NavList.propTypes = {
  user: PropTypes.object
};

export default NavList;
