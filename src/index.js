import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import { App, } from './components';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
