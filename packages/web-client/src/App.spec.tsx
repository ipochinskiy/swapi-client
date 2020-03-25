import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('WebClient: App', () => {
  it('should show the Thanos button', () => {
    const component = shallow(<App />);

    expect(component.find('Button').props()).toMatchObject({
      type: 'button',
      label: 'Hit da button!',
    });
  });
});
