import React from 'react';
import { connect, } from 'react-redux';
import { graphActs, } from '../../modules';
import Visualization from '../visualization';
import Nodes from './../nodes';
const mapStateToProps = ({ graph, nodes, }) => ({ graph, nodes, });

const Graph = ({ graph, nodes, }) => (
  <div>
    <h2>Graph</h2>
    <h1>here is your graph </h1>
    <div className="graphVis col s12">
      <svg className="boardVis col s12" stroke="#00ff00" >
        <Visualization />
      </svg>
    </div>
  </div>);

export default connect(mapStateToProps, graphActs)(Graph);
