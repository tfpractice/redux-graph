import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect, } from 'react-redux';
import { nodeActs, } from '../modules';
import Node from './node';

const mapStateToProps = ({ graph, nodes, }) => ({ nodes, });

const Nodes = ({ nodes, createNodes, }) => (
  <div>
    <h2>Nodes</h2>
    <h1>these are your nodes</h1>
    <svg className="nodes">
      { nodes.map(n => <Node key={n.id} {...n} />) }
    </svg>
  </div>);

export default connect(mapStateToProps, nodeActs)(Nodes);
