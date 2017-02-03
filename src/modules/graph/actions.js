import { Graph, } from 'graph-curry';
import { ADD_EDGES, ADD_NODES, FROM_ELEMENTS, MERGE_EDGES, NEIGHBORS, NODES,
  REMOVE_EDGES, REMOVE_NODES, RESET_NODES, } from './constants';

// const createBin = (state, v) => state.concat(state.length);
// const create = (count = 1) => state => Array(count).fill(1).reduce(createBin, state);

const addEdgesPermute = (src, w = 0) => (...nabes) => g =>
Graph.addEdges(g)(src, w)(...nabes);

export const addEdges = (s, w) => dispatch => (...nabes) =>
 ({ type: ADD_EDGES, curry: addEdgesPermute(s, w)(...nabes), });

// export const addEntryPermute = nabes => ([ n, w = 0 ]) => addBinMap(nabes, [ n, w ]);
// export const addEntry = nabes => ([ n, w = 0 ]) => addBinMap(nabes, [ n, w ]);

// export const addNeighborPermute = g => src => (n, w = 0) =>
// export const addNeighbor = g => src => (n, w = 0) =>

const addNodesPermute = (...srcs) => g => Graph.addNodes(g)(srcs);

export const addNodes = (...srcs) =>
({ type: ADD_NODES, curry: addNodesPermute(...srcs), });

// export const adjPermute = g => src => asMap(get(g)(src));
// export const adj = g => src => asMap(get(g)(src));

// export const containsPermute = g => node => hasK(g)(node);
// export const contains = g => node => hasK(g)(node);

// export const copyPermute = spawn;
// export const copy = spawn;

// export const disconnectNodesPermute = g => (...srcs) =>
// export const disconnectNodes = g => (...srcs) =>

// export const fromElementsPermute = (...elems) => elems.reduce(addNodeBin, copy());
// export const fromElements = (...elems) => elems.reduce(addNodeBin, copy());

// export const isAdjacentPermute = g => src => nb => contains(adj(g)(src))(nb);
// export const isAdjacent = g => src => nb => contains(adj(g)(src))(nb);

const mergeEdgesPermute = (...alt) => g => Graph.mergeEdges(g)(...alt);

export const mergeEdges = (...alt) =>
({ type: MERGE_EDGES, curry: mergeEdgesPermute(...alt), });

// export const mergeNeighborsPermute = uniteMap;
// export const mergeNeighbors = uniteMap;

// export const neighborsPermute = g => src => nodes(adj(g)(src));
// export const neighbors = g => src => nodes(adj(g)(src));

// export const nodesPermute = g => spreadK(copy(g));
// export const nodes = g => spreadK(copy(g));

const removeEdgesPermute = src => (...nabes) => g => Graph.removeEdges(g)(src)(...nabes);

export const removeEdges = src => (...nabes) => g =>
({ type: REMOVE_EDGES, curry: removeEdgesPermute(src)(...nabes), });

const removeNodesPermute = (...srcs) => g => Graph.removeNodes(...srcs)(g);

export const removeNodes = (...srcs) =>
({ type: REMOVE_NODES, curry: removeNodesPermute(...srcs), });

// export const resetNodesPermute = g => (...src) => src.reduce(resetNodeBin, edges);
// export const resetNodes = g => (...src) => src.reduce(resetNodeBin, edges);

// export const spawnPermute = g => asMap(g);
// export const spawn = g => asMap(g);
