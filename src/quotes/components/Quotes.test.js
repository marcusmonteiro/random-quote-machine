import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import Quotes from './Quotes';
import { capitalizeFirstLetter } from '../utils';

const contents = ['foo', 'bar', 'baz'];
const quotes = contents.map((v, i) => {
  return {
    content: v,
    author: capitalizeFirstLetter(v)
  }
})

describe('Quotes', () => {
  it('must receive a list of quotes as props', () => {
    const stub = sinon.stub(console, 'error');
    //expect(() => {
    //  shallow(<Quotes />);
    //}).toThrow();

    const notQuote = {
      notQuote: 'notQuote'
    };
    const notQuotes = [notQuote];
    shallow(<Quotes quotes={notQuote} />);
    shallow(<Quotes quotes={notQuotes} />);
    shallow(<Quotes quotes={quotes} />);
    expect(stub.calledTwice).toBe(true);
    expect(stub.calledWith(sinon.match('prop type'))).toBe(true);
    console.error.restore();
  });

  it('should render as many QuoteComponents as quotes it r', () => {
    const wrapper = shallow(<Quotes quotes={quotes} />);
  });
});