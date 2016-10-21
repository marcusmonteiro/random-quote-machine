import React, { Component } from 'react';

import QuotesContainer from './quotes/containers/QuotesContainer';

const styles = {
  flex: 1,
  alignItems: 'center',
  alignSelf: 'center'
}

class App extends Component {
  render() {
    return (
      <div>
        <QuotesContainer style={styles}/>
      </div>
    );
  }
}

export default App;
