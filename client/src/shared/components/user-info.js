import React, { PropTypes } from 'react';

const UserNavInfo = props => {
  const { children, user, isOpen, onClick } = props;
  return (<div
    onClick={onClick}
    className={isOpen
      ? 'container__user expand'
      : 'container__user'}>
    <div className="container__user__name">
      <span className="container__user__name__span--name">
        {user.userName}
      </span>&nbsp;
      <span className="fa fa-chevron-left"></span>
    </div>
    {children}
  </div>);
};

UserNavInfo.propTypes = {
  children: PropTypes.any.isRequired,
  user: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default UserNavInfo;
