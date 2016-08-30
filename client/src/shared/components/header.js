import React, { PropTypes } from 'react';
import './_header.scss';

const Header = props => {
  return (<header className="container__main__header" role="banner">
    {props.children}
  </header>);
};

Header.propTypes = {
  children: PropTypes.object.isRequired
};

export default Header;
