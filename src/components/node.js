import React, { PropTypes, } from 'react';

const Node = ({ id, }) => (
  <svg className="node" id={`node::${id}`}>
    <circle id={id} className="nodeCircle" fill="#ff00ff" />
  </svg>
);

export default Node;
