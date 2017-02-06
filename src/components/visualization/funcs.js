
import * as d3 from 'd3';
import { Graph, } from 'graph-curry';

export const tupleLink = ([ source, nbs, ]) => nbs.map(target => ({ source, target, }));
export const reduceLink = g => e => tupleLink([ e, Graph.neighbors(g)(e), ]);
export const concatLinks = (links, newLinks) => [ ...links, ...newLinks, ];
export const graphLinks = graph =>
  Graph.nodes(graph).map(reduceLink(graph)).reduce(concatLinks, []);

export const color = d3.scaleOrdinal()
  .domain([ null, 0, 1, ])
  .range([ 'steelblue', '#ff0000', '#000000', ]);

export const scaleX = d3.scaleLinear()
  .domain([ 0, 7, ])
  .range([ 480 * 0.25, (480 * 0.75), ]);

export const scaleY = d3.scaleLinear()
  .domain([ 0, 7, ])
  .range([ 250 * 0.25, (250 * 0.75), ]);

export const dragStarted = force => (d) => {
  console.log('dragStarted', d);
  if (!d3.event.active) force.alphaTarget(0.3).restart();
  d3.event.x = d.fx = d.x;
  d3.event.y = d.fy = d.y;
};

export const dragged = force => (d) => {
  console.log('dragged', d);
  
  d.fx = d3.event.sourceEvent.x;
  d.fy = d3.event.sourceEvent.y;
};

export const dragEnded = force => (d) => {
  console.log('dragEnded', d);
  
  if (!d3.event.active) force.alphaTarget(0);
  d.fx = null;
  d.fy = null;
};

export const updateLinks = (domLinks = d3.selectAll('.link')) => () => {
  domLinks
    .attr('stroke', '#00ff00')
    .attr('stroke-width', 5)
    .attr('x1', ({ source: { x, }, }) => x)
    .attr('y1', ({ source: { y, }, }) => y)
    .attr('x2', ({ target: { x, }, }) => x)
    .attr('y2', ({ target: { y, }, }) => y);
};

export const updateNodes = (domNodes = d3.selectAll('.nodeCircle')) => () => {
  domNodes
    .attr('cx', (({ x, }) => x))
    .attr('cy', (({ y, }) => y));
};

export const dStart = sim => (d) => {
  console.log('dStart', d);
  
  if (!d3.event.active) sim.alphaTarget(0.1).restart();
  d.fx = d.x;
  d.fy = d.y;
};

export const dEnd = sim => (d) => {
  console.log('dEnd', d);
  
  if (!d3.event.active) sim.alphaTarget(0.1);
  d.fx = null;
  d.fy = null;
};
