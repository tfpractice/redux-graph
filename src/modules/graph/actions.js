import { Graph, } from 'graph-curry';
import { ADD_EDGES, ADD_ENTRY, ADD_NEIGHBOR, ADD_NODES, ADJ, CONTAINS, COPY,
FROM_ELEMENTS, IS_ADJACENT, MERGE_EDGES, NEIGHBORS, NODES, REMOVE_EDGES,
REMOVE_NODES, RESET_NODES, SPAWN, } from './constants';

const addEdgesPermute = (src, w = 0) => (...nabes) => edges =>
Graph.addEdges(edges)(src, w)(...nabes);

export const addEdges = (s, w) => dispatch => (...nabes) =>
 ({ type: 'ADD_EDGES', curry: addEdgesPermute(s, w)(...nabes), });

// export const addEntryPermute = nabes => ([ n, w = 0 ]) => addBinMap(nabes, [ n, w ]);
// export const addEntry = nabes => ([ n, w = 0 ]) => addBinMap(nabes, [ n, w ]);

// export const addNeighborPermute = edges => src => (n, w = 0) =>
// export const addNeighbor = edges => src => (n, w = 0) =>

export const addNodesPermute = (...srcs) => edges => Graph.addNodes(edges)(srcs);

export const addNodes = (...srcs) =>
({ type: 'ADD_NODES', curry: addNodesPermute(...srcs), });

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

// export const mergeEdgesPermute = edges => (...alt) => alt.reduce(mergeEdgesBin, edges);
// export const mergeEdges = edges => (...alt) => alt.reduce(mergeEdgesBin, edges);

// export const mergeNeighborsPermute = uniteMap;
// export const mergeNeighbors = uniteMap;

// export const neighborsPermute = edges => src => nodes(adj(edges)(src));
// export const neighbors = edges => src => nodes(adj(edges)(src));

// export const nodesPermute = edges => spreadK(copy(edges));
// export const nodes = edges => spreadK(copy(edges));

// export const removeEdgesPermute = edges => src => (...nabes) =>
// export const removeEdges = edges => src => (...nabes) =>

// export const removeNodesPermute = edges => (...srcs) =>
// export const removeNodes = edges => (...srcs) =>

// export const resetNodesPermute = edges => (...src) => src.reduce(resetNodeBin, edges);
// export const resetNodes = edges => (...src) => src.reduce(resetNodeBin, edges);

// export const spawnPermute = edges => asMap(edges);
// export const spawn = edges => asMap(edges);
