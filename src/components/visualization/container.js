import React from 'react';
import { connect, } from 'react-redux';
import { Graph, } from 'graph-curry';
import Visualization from './component';
import * as d3 from 'd3';
import { dEnd, dragged, dStart, graphLinks, updateLinks, updateNodes, } from './funcs';

const nodeSelect = nArr =>
  d3.selectAll('.nodeCircle')
    .data(nArr)
    .attr('r', 10)
    .attr('fill', '#ff00ff')
    .attr('opacity', 0.4);

const linkSelect = links => d3.selectAll('.link').data(links);

const mapStateToProps = ({ graph, nodes, }) => {
  console.log('nodes', nodes);
  console.log('links', links);
  const links = graphLinks(graph);
  
  const myForce = d3.forceSimulation(nodes)
    .force('x', d3.forceX().strength(0.02))
    .force('y', d3.forceY().strength(0.02))
    .force('charge', d3.forceManyBody())
    .force('link', d3.forceLink(links).id(({ id, }) => id))
    .force('center', d3.forceCenter(480 / 2, 250 / 2))
    .on('tick.n', updateNodes(nodeSelect(nodes)))
    .on('tick.l', updateLinks(linkSelect(links)));
  
  nodeSelect(nodes).call(d3.drag()
    .on('start', dStart(myForce))
    .on('drag', dragged(myForce))
    .on('end', dEnd(myForce)));
  
  return ({ links, });
};

export default connect(mapStateToProps)(Visualization);
