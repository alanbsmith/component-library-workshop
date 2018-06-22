import React from 'react';
import { shallow } from 'enzyme';

import StatusMessage from '../index';

function shallowRender(status) {
  return shallow(
    <StatusMessage status={status}>
      status message
    </StatusMessage>
  );
};

describe('StatusMessage Component', () => {
  it('should properly render the danger status', () => {
    const wrapper = shallowRender('danger');
    const icon = wrapper.find('Icon');

    expect(wrapper.props().modifiers).toContain('statusColorDanger');
    expect(icon.props().name).toBe('times-circle');
  });

  it('should properly render the info status', () => {
    const wrapper = shallowRender('info');
    const icon = wrapper.find('Icon');

    expect(wrapper.props().modifiers).toContain('statusColorInfo');
    expect(icon.props().name).toBe('info-circle');
  });

  it('should properly render the success status', () => {
    const wrapper = shallowRender('success');
    const icon = wrapper.find('Icon');

    expect(wrapper.props().modifiers).toContain('statusColorSuccess');
    expect(icon.props().name).toBe('check-circle');
  });

  it('should properly render the warning status', () => {
    const wrapper = shallowRender('warning');
    const icon = wrapper.find('Icon');

    expect(wrapper.props().modifiers).toContain('statusColorWarning');
    expect(icon.props().name).toBe('exclamation-circle');
  });
});
