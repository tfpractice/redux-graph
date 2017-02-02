import { NODE_ACTIONS, } from './constants';

export default (state = [], { type, curry, }) =>
  NODE_ACTIONS.has(type) ? curry(state) : state;
