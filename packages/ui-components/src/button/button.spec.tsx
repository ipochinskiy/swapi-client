import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './button';

describe('UI Components: Button', () => {
  it('should render a button with "type" and "label"', () => {
    const props = {
      type: 'submit' as const,
      label: 'Thanos rocks!!',
    };

    const component = shallow(<Button {...props} />);
    const button = component.find('button');

    expect(button.prop('type')).toEqual('submit');
    expect(button.text()).toEqual('Thanos rocks!!');
  });

  it('should render a button with a default "type"', () => {
    const props = {
      label: 'Thanos rocks!!',
    };

    const component = shallow(<Button {...props} />);
    const button = component.find('button');

    expect(button.prop('type')).toEqual('button');
    expect(button.text()).toEqual('Thanos rocks!!');
  });
});
