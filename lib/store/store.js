import { createStore } from 'redux';
import RootReducer from '../app/root_reducer';
import RootMiddleware from '../app/root_middleware';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  )
);

export default configureStore;
