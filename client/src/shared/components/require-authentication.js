import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { validateState } from '../../login/actions';

const Wrapper = function(ComposedComponent) {
  class AuthenticatedComponent extends PureComponent {
    componentWillMount() {
      const { dispatch } = this.props;
      dispatch(validateState());
    }

    render() {
      const { props } = this;
      return <ComposedComponent {...props} />;
    }
    static propTypes = {
      dispatch: PropTypes.func.isRequired
    }
  }

  function mapStateToProps(state) {
    const { authenticationReducer } = state;
    return {
      authenticated: authenticationReducer.authenticated,
      user: authenticationReducer.user
    };
  }

  return connect(mapStateToProps)(AuthenticatedComponent);
};

export default Wrapper;
