import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

const Container = props => {
  const { isVisible, transitionName, children } = props;
  if (isVisible) {
    return (<ReactCSSTransitionGroup
      transitionEnterTimeout={500}
      transitionLeaveTimeout={700}
      transitionName={transitionName}>
      <div className="modal"><div className="modal__body">{children}</div></div>
    </ReactCSSTransitionGroup>);
  }
  return (<ReactCSSTransitionGroup
    transitionEnterTimeout={0}
    transitionLeaveTimeout={0}
    transitionName={transitionName}></ReactCSSTransitionGroup>);
};

Container.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  transitionName: PropTypes.object.isRequired,
  children: PropTypes.array
};

export default Container;
