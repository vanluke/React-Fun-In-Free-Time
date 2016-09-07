import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

export default function configureStore() {
  return applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )(createStore)(rootReducer);
}
