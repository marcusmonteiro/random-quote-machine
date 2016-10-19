import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import QuotesContainer from './quotes/containers/QuotesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuotesContainer />
      </div>
    );
  }
}

export default App;
