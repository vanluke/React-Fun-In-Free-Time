import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { validateState } from '../../login/actions';

export default function(ComposedComponent) {
  class AuthenticatedComponent extends PureComponent {
    componentWillMount() {
      const { dispatch } = this.props;
      dispatch(validateState());
    }

    render() {
      const { props } = this;
      return <ComposedComponent {...props} />;
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
}
