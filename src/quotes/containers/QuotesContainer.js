import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Grid, Row , Col } from 'react-bootstrap';
import Quotes from '../components/Quotes';

class QuotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote() {
    const quotesApiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
    $.getJSON(quotesApiUrl)
      .done((data) => {
        const quotes = [{
          content: data.quoteText,
          author: data.quoteAuthor
        }];
        this.setState({
          quotes
        })
      })
      .fail((err) => {
        console.error(err);
      })
  }

  render() {
    if (!this.state.quotes.length > 0) {
      return <p>Loading...</p>;
    }
    return (
      <Grid>
        <Row>
          <Col>
            <Quotes quotes={ this.state.quotes } />
          </Col>
        </Row>
        <Row>
           <Col>
            <Button bsStyle="primary" onClick={ this.fetchQuote }>Another quote</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default QuotesContainer;
