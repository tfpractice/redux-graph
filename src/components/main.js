import logo from './app/logo.svg';
import './app/App.css';
import React, { Component, } from 'react';
import { connect, } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { graphActs, nodeActs, } from '../modules';
import Graph from './graph';
import Nodes from './nodes';
const mapStateToProps = ({ nodes, graph, }) => ({ nodes, graph, });

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme, { userAgent: false, })}>

        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Nodes />
          <Graph />
        </div>

      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, nodeActs,)(App);
