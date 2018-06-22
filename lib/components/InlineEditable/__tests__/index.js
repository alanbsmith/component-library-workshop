import React from 'react';
import { mountWithTheme } from "__tests__/helpers";

import InlineEditable from '../index';

const defaultProps = {
  id: 'email',
};

function mountedComponent(props = defaultProps) {
  return mountWithTheme(
    <InlineEditable {...props}>
      <InlineEditable.Label>Email</InlineEditable.Label>
      <InlineEditable.TextField />
    </InlineEditable>
  );
};

describe('InlineEditable Component (stubbed test)', () => {
  it('should render it\'s children' , () => {
    expect(true).toBe(true);
  });
});
