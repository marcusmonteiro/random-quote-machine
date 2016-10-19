import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import QuotesContainer from './QuotesContainer';

describe('Quote container', () => {
  it('should fetch quotes', () => {
    const wrapper = shallow(<QuotesContainer />);
  });

  it('should render a Quotes component with the quotes it fetched', () => {
    const wrapper = shallow(<QuotesContainer />);
  });
});