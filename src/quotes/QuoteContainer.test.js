import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import QuoteContainer from './QuoteContainer';

describe('Quote container', () => {
  it('should fetch quotes', () => {
    const wrapper = shallow(<QuoteContainer />);
  });

  it('should render as many QuoteComponents as quotes it fetched', () => {
    const wrapper = shallow(<QuoteContainer />);
  });
});