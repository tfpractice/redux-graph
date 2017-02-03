import { CLEAR_NODES, CREATE_NODES, DESTROY_NODES, UPDATE_NODES, } from './constants';

const newNode = id => ({ id, });
const createBin = (state, v) => state.concat(newNode(state.length));
const create = (count = 1) => state => Array(count).fill(1).reduce(createBin, state);

export const createNodes = count => ({ type: CREATE_NODES, curry: create(count), });
