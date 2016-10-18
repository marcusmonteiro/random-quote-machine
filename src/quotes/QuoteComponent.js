import React from 'react';

function QuoteComponent(quote) {
  return (
    <div>
      <blockquote>
        <p>{quote.content}</p>
        <footer>
          - <cite>{quote.author}</cite>
        </footer>
      </blockquote>
    </div>
  )
}

QuoteComponent.propTypes = {
  quote: React.PropTypes.shape({
    content: React.PropTypes.string,
    author: React.PropTypes.string
  }).isRequired
}

export default QuoteComponent;