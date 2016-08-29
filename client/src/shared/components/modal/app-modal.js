import React, { PropTypes } from 'react';
import Container from './container';
import './_modal.scss';
import { toggleModal } from '../../actions';

const transitionSettings = {
  enter: 'modal__enter',
  enterActive: 'modal__enter--active',
  leave: 'modal__leave',
  leaveActive: 'modal__leave--active'
};

const closeModal = function(props) {
  const { dispatch, isOpen } = props;
  dispatch(toggleModal(isOpen));
};

const Error = props => {
  const { isOpen, title, message } = props;
  return (<Container
    isVisible={isOpen}
    transitionName={transitionSettings}>
    <h3>{title}</h3>
    <div>
      <p>{message}</p>
    </div>
    <button
      className="modal__body__button--close"
      onClick={closeModal.bind(this, props)}>✖</button>
  </Container>);
};

Error.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  title: PropTypes.string
};

export default Error;
