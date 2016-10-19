import React, { Component } from 'react';

import Quotes from '../components/Quotes';
import { request } from '../../utils';

class QuotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote() {
    const quotesApiUrl = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
    request(quotesApiUrl)
      .then((data) => {
        const quotes = data.map((quote) => {
          return {
            content: quote.content,
            author: quote.title
          }
        });
        this.setState({
          quotes: quotes
        });
      })
      .catch((err) => {
        console.error(err)
      });
  }

  render() {
    const quote = {
      content: 'foo',
      author: 'Foo'
    }
    if (!this.state.quotes.length > 0) {
      return <p>Loading</p>;
    }
    return (
      <Quotes quotes={this.state.quotes} />
    );
  }
}

export default QuotesContainer;