import React, { Component } from 'react';
import { Grid, Row , Col } from 'react-bootstrap';

import Header from './header';
import QuotesContainer from './quotes/containers/QuotesContainer';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <QuotesContainer />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
