import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import QuoteComponent from './QuoteComponent';

const content = 'Hello';
const author = 'Dennis Ritchie';

const quote = {
  content,
  author
};

describe('Quote component', () => {
  it('must receive as prop an object with quote and author as keys', () => {
    const stub = sinon.stub(console, 'error');
    shallow(<QuoteComponent />);
    expect(stub.calledOnce).toBe(true);
    expect(stub.calledWith(sinon.match('prop type'))).toBe(true);
    console.error.restore();
  });

  it(`should render the quote's content and author`, () => {
    const wrapper = shallow(<QuoteComponent {...quote} />);
    expect(wrapper.containsMatchingElement(quote.content)).toBe(true);
    expect(wrapper.containsMatchingElement(quote.author)).toBe(true);
  });

  it('should have a blockquote and a cite element', () => {
    const wrapper = shallow(<QuoteComponent {...quote} />);
    expect(wrapper.find('blockquote').length).toBe(1);
    expect(wrapper.find('cite').length).toBe(1);
  })
});