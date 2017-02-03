import { combineReducers, } from 'redux';
import { reducer as form, } from 'redux-form';
import { reducer as graph, } from './graph';
import { reducer as nodes, } from './nodes';

export { actions as graphActs, } from './graph';
export { actions as nodeActs, } from './nodes';

export const reducer = combineReducers({ graph, nodes, form, });
