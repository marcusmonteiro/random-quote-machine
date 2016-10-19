import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import Quote from './Quote';

const content = 'Hello';
const author = 'Dennis Ritchie';

const quote = {
  content,
  author
};

describe('Quote component', () => {
  it('must receive as prop an object with quote and author as keys', () => {
    const stub = sinon.stub(console, 'error');

    expect(() => {
      shallow(<Quote />);
    }).toThrow();

    const notQuote = {
      notQuote: 'notQuote'
    };
    shallow(<Quote quote={notQuote} />);
    shallow(<Quote quote={quote} />);
    expect(stub.calledTwice).toBe(true);
    expect(stub.calledWith(sinon.match('prop type'))).toBe(true);
    console.error.restore();
  });

  it(`should render the quote's content and author`, () => {
    const wrapper = shallow(<Quote quote={quote} />);
    expect(wrapper.containsMatchingElement(quote.content)).toBe(true);
    expect(wrapper.containsMatchingElement(quote.author)).toBe(true);
  });

  it('should have a blockquote and a cite element', () => {
    const wrapper = shallow(<Quote quote={quote} />);
    expect(wrapper.find('blockquote').length).toBe(1);
    expect(wrapper.find('cite').length).toBe(1);
  })
});