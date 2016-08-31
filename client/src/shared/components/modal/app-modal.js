import React, { PropTypes } from 'react';
import Container from './container';
import './_modal.scss';

const transitionSettings = {
  enter: 'modal__enter',
  enterActive: 'modal__enter--active',
  leave: 'modal__leave',
  leaveActive: 'modal__leave--active'
};

const Error = props => {
  const { isOpen, title, message, onClose } = props;
  return (<Container
    isVisible={isOpen}
    transitionName={transitionSettings}>
    <h3>{title}</h3>
    <div>
      <p>{message}</p>
    </div>
    <button
      className="modal__body__button--close"
      onClick={onClose.bind(null, isOpen)}>✖</button>
  </Container>);
};

Error.propTypes = {
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

export default Error;
