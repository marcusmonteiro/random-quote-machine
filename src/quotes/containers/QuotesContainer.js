import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

import Quotes from '../components/Quotes';
import { request } from '../../utils';

class QuotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
    this.fetchQuote = this.fetchQuote.bind(this);
    this.anotherQuoteButton =
      <FlatButton
        label="Another quote"
        primary={true}
        onClick={this.fetchQuote}
      />
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
