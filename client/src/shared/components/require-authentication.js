import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class AuthenticatedComponent extends PureComponent {
    componentWillMount() {
      const { authenticated } = this.props;
      if (!authenticated) {
        this.context.router.push('/login');
      }
    }

    render() {
      const { props } = this;
      return <ComposedComponent {...props} />;
    }

    componentWillUpdate({ authenticated }) {
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
