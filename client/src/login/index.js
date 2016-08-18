import { connect } from 'react-redux';
import LoginComponent from './components/login';
import mapStateToProps from './map-state-to-props';

export const Login = connect(mapStateToProps)(LoginComponent);
