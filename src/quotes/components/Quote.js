import React from 'react';

function createMarkup(string) {
  return {
    __html: string
  };
};

function Quote(props) {
  return (
    <div>
      <blockquote>
        <div dangerouslySetInnerHTML={createMarkup(props.quote.content)} />
        <footer>
          - <cite>{props.quote.author}</cite>
        </footer>
      </blockquote>
    </div>
  );
}

Quote.propTypes = {
  quote: React.PropTypes.shape({
    content: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired
  }).isRequired
}

export default Quote;