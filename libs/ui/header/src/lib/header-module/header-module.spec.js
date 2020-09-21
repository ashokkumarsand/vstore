import React from 'react';
import { render } from '@testing-library/react';
import HeaderModule from './header-module';
describe('HeaderModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderModule />);
    expect(baseElement).toBeTruthy();
  });
});
