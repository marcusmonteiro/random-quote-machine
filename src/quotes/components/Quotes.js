import React from 'react';

import Quote from './Quote';

function Quotes(props) {
  return (
    <div>
      <ul>
        {props.quotes.map((quote, i) => {
          return <Quote key={i} quote={quote} />
        })}
      </ul>
    </div>
  )
}

Quotes.propTypes = {
  quotes: React.PropTypes.arrayOf(React.PropTypes.shape({
    content: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired
  })).isRequired
}

export default Quotes;