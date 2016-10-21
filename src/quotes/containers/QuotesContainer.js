import React, { Component } from 'react';

import Quotes from '../components/Quotes';
import { request } from '../../utils';
import ronSwansonImage from './ron_swanson.png';

class QuotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
    this.fetchQuote = this.fetchQuote.bind(this);
    this.anotherQuoteButton =
      <div>
        <button onClick={ this.fetchQuote }>Another Quote</button>
      </div>
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote() {
    // const quotesApiUrl = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
    const quotesApiUrl = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
    request(quotesApiUrl)
      .then((data) => {
        const quotes = data.map((quote) => {
          // return {
          //   content: quote.content,
          //   author: quote.title
          // }
          return {
            content: data[0],
            author: 'Ron Swanson'
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
    if (!this.state.quotes.length > 0) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <Quotes quotes={this.state.quotes} />
        { this.anotherQuoteButton }
      </div>
    );
  }
}

export default QuotesContainer;
