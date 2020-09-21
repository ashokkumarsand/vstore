import React from 'react';
import { render } from '@testing-library/react';
import UiErrorBoundary from './ui-error-boundary';
describe('UiErrorBoundary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiErrorBoundary />);
    expect(baseElement).toBeTruthy();
  });
});
