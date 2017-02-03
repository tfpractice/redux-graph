import { Graph, } from 'graph-curry';
import { ADD_EDGES, ADD_NODES, FROM_ELEMENTS, MERGE_EDGES, NEIGHBORS, NODES,
  REMOVE_EDGES, REMOVE_NODES, RESET_NODES, } from './constants';

// const createBin = (state, v) => state.concat(state.length);
// const create = (count = 1) => state => Array(count).fill(1).reduce(createBin, state);

const addEdgesPermute = (src, w = 0) => (...nabes) => edges =>
Graph.addEdges(edges)(src, w)(...nabes);

export const addEdges = (s, w) => dispatch => (...nabes) =>
 ({ type: ADD_EDGES, curry: addEdgesPermute(s, w)(...nabes), });

// export const addEntryPermute = nabes => ([ n, w = 0 ]) => addBinMap(nabes, [ n, w ]);
// export const addEntry = nabes => ([ n, w = 0 ]) => addBinMap(nabes, [ n, w ]);

// export const addNeighborPermute = edges => src => (n, w = 0) =>
// export const addNeighbor = edges => src => (n, w = 0) =>

const addNodesPermute = (...srcs) => edges => Graph.addNodes(edges)(srcs);

export const addNodes = (...srcs) =>
({ type: ADD_NODES, curry: addNodesPermute(...srcs), });

// export const adjPermute = edges => src => asMap(get(edges)(src));
// export const adj = edges => src => asMap(get(edges)(src));

// export const containsPermute = edges => node => hasK(edges)(node);
// export const contains = edges => node => hasK(edges)(node);

// export const copyPermute = spawn;
// export const copy = spawn;

// export const disconnectNodesPermute = edges => (...srcs) =>
// export const disconnectNodes = edges => (...srcs) =>

// export const fromElementsPermute = (...elems) => elems.reduce(addNodeBin, copy());
// export const fromElements = (...elems) => elems.reduce(addNodeBin, copy());

// export const isAdjacentPermute = edges => src => nb => contains(adj(edges)(src))(nb);
// export const isAdjacent = edges => src => nb => contains(adj(edges)(src))(nb);

export const mergeEdgesPermute = (...alt) => edges =>
 Graph.mergeEdges(edges)(...alt);
export const mergeEdges = (...alt) =>
({ type: MERGE_EDGES, curry: mergeEdgesPermute(...alt), });

// export const mergeNeighborsPermute = uniteMap;
// export const mergeNeighbors = uniteMap;

// export const neighborsPermute = edges => src => nodes(adj(edges)(src));
// export const neighbors = edges => src => nodes(adj(edges)(src));

// export const nodesPermute = edges => spreadK(copy(edges));
// export const nodes = edges => spreadK(copy(edges));

export const removeEdgesPermute = src => (...nabes) => edges =>
Graph.removeEdges(edges)(src)(...nabes);
export const removeEdges = src => (...nabes) => edges =>
({ type: REMOVE_EDGES, curry: removeEdgesPermute(src)(...nabes), });

export const removeNodesPermute = (...srcs) => edges =>
 Graph.removeNodes(...srcs)(edges);
export const removeNodes = (...srcs) =>
({ type: REMOVE_NODES, curry: removeNodesPermute(...srcs), });

// export const resetNodesPermute = edges => (...src) => src.reduce(resetNodeBin, edges);
// export const resetNodes = edges => (...src) => src.reduce(resetNodeBin, edges);

// export const spawnPermute = edges => asMap(edges);
// export const spawn = edges => asMap(edges);
