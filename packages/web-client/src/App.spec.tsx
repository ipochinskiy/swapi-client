import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('WebClient: App', () => {
  it('should show the button', () => {
    const component = shallow(<App />);

    expect(component.find('Button').props()).toMatchObject({
      type: 'button',
    });
    expect(
      component
        .find('Button')
        .dive()
        .text(),
    ).toEqual('Hit da button!!');
  });
});
