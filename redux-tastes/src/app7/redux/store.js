import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer';
import logger from '../middleware/logger';

const store = createStore(reducer, applyMiddleware(thunk, logger))
export default store

