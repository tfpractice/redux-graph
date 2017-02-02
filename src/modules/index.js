import { combineReducers, } from 'redux';
import { reducer as graph, } from './graph';

export { actions as GraphActs, } from './graph';

export const reducer = combineReducers({ graph, });
