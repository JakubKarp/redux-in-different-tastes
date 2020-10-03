import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer';
import logger from '../middleware/logger';
import apiMiddleware from '../middleware/api';

const store = createStore(reducer, applyMiddleware(thunk, apiMiddleware, logger))
export default store

