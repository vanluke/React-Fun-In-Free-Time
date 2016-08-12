import React from 'react';

const LoginInput = props => {
  return (<div className="login__form__group">
    <input
      className="fun__input"
      id={props.id}
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder} />
    {props.children}
  </div>);
};

LoginInput.propTypes = {
  id: React.PropTypes.string,
  placeholder: React.PropTypes.any,
  children: React.PropTypes.object,
  type: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default LoginInput;
