import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect, } from 'react-redux';
import { nodeActs, } from '../modules';

const mapStateToProps = ({ graph, nodes, }) => ({ nodes, });

const Nodes = ({ nodes, createNodes, }) => (
  <div>
    <h2>Nodes</h2>
    <h1>these are your nodes</h1>
    <FlatButton secondary label="create nodes" onClick={createNodes} />
    <ul>
      { nodes.map((n, i) => <li key={i}> node::{n} </li>) }
    </ul>
  </div>);

export default connect(mapStateToProps, nodeActs)(Nodes);
