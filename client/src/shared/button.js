import React from 'react';

const Button = props => {
  const { className, children } = props;
  const classes = `fun__button ${className}`;
  return (<button className={classes} onClick={props.onClick}>
      {children}
  </button>);
};

Button.propTypes = {
  children: React.PropTypes.object,
  onClick: React.PropTypes.func,
  className: React.PropTypes.string
};

export default Button;
