import React from 'react';
import { render } from '@testing-library/react';
import ProductModule from './product-module';
describe('ProductModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductModule />);
    expect(baseElement).toBeTruthy();
  });
});
