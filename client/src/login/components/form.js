import React from 'react';

const Form = props => {
  return (<form onSubmit={props.onSubmit} className="login__form">
    <h4 className="login__form__title">{props.title}</h4>
    {props.children}
  </form>);
};

Form.propTypes = {
  children: React.PropTypes.any,
  onSubmit: React.PropTypes.func,
  title: React.PropTypes.string
};

export default Form;
