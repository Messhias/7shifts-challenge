import React, { Component } from 'react';
import './App.css';
import MainApp from './Main/App';

class App extends Component {
  render() {
    return (
        <MainApp
          history={this.props.history}
        />
    );
  }
}

export default App;
