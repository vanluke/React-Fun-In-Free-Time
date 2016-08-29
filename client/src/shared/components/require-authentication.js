import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { checkAuthentication } from '../../login/actions';

export default function(ComposedComponent) {
  class AuthenticatedComponent extends PureComponent {
    componentWillMount() {
      const { authenticated, dispatch } = this.props;
      dispatch(checkAuthentication(authenticated));
    }

    render() {
      const { props } = this;
      return <ComposedComponent {...props} />;
    }

    componentWillUpdate({ authenticated }) {
      const { dispatch } = this.props;
      dispatch(checkAuthentication(authenticated));
      if (!authenticated) {
        this.context.router.push('/login');
      }
    }

    componentWillReceiveProps(props) {
      const { authenticated } = props;
      if (!authenticated) {
        this.context.router.push('/login');
      }
    }

    static contextTypes = {
      router: PropTypes.object
    };

    static propTypes = {
      authenticated: PropTypes.bool
    };
  }

  function mapStateToProps(state) {
    const { authenticationReducer } = state;
    return { authenticated: authenticationReducer.authenticated };
  }

  return connect(mapStateToProps)(AuthenticatedComponent);
}
