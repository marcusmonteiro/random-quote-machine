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
    expect(() => {
      shallow(<Quotes />);
    }).toThrow();

    const notQuote = {
      notQuote: 'notQuote'
    };
    const notQuotes = [notQuote];
    expect(() => {
      shallow(<Quotes quotes={notQuote} />);
    }).toThrow();

    shallow(<Quotes quotes={notQuotes} />);
    shallow(<Quotes quotes={quotes} />);
    console.log(stub.callCount)
    expect(stub.callCount).toBe(5);
    expect(stub.calledWith(sinon.match('prop type'))).toBe(true);
    console.error.restore();
  });

  it('should render as many Quote components as quotes it receives', () => {
    const wrapper = shallow(<Quotes quotes={quotes} />);
    expect(wrapper.find('Quote').length).toBe(quotes.length);
  });
});