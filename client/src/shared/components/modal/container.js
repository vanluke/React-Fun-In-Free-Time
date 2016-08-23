import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

const Container = props => {
  const { isVisible, transitionName, children } = props;
  if (isVisible) {
    return (<ReactCSSTransitionGroup
      transitionName={transitionName}>
      <div className="modal">{children}</div>
    </ReactCSSTransitionGroup>);
  }
  return (<ReactCSSTransitionGroup
    transitionName={transitionName}></ReactCSSTransitionGroup>);
};

Container.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  transitionName: PropTypes.object.isRequired,
  children: PropTypes.object
};

export default Container;
