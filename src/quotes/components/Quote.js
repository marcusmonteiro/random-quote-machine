import React from 'react';

function Quote(props) {
  return (
    <div>
      <blockquote>
        <p>{props.quote.content}</p>
        <footer>
          - <cite>{props.quote.author}</cite>
        </footer>
      </blockquote>
    </div>
  )
}

Quote.propTypes = {
  quote: React.PropTypes.shape({
    content: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired
  }).isRequired
}

export default Quote;