import React from 'react';
import { connect, } from 'react-redux';
import { graphActs, } from '../modules';

const mapStateToProps = ({ graph, nodes, }) => ({ graph, nodes, });

const Graph = ({ graph, nodes, }) => (
  <div>
    <h2>Graph</h2>
    <h1>here is your graph </h1>
    
  </div>);

export default connect(mapStateToProps, graphActs)(Graph);
