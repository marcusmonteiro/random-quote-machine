import React, { Component } from 'react';
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
