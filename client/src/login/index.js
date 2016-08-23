import { connect } from 'react-redux';
import LoginComponent from './components/login';
import mapStateToProps from './map-state-to-props';
// import { loginUser } from '../actions';

export const Login = connect(mapStateToProps)(LoginComponent);
