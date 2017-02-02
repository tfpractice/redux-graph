import { GRAPH_ACTIONS, } from './constants';

export default (state = [], { type, curry, }) =>
  GRAPH_ACTIONS.has(type) ? curry(state) : state;
