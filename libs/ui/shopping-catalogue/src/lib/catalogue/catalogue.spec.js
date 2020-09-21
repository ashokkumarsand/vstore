import React from 'react';
import { render } from '@testing-library/react';
import Catalogue from './catalogue';
describe('Catalogue', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Catalogue />);
    expect(baseElement).toBeTruthy();
  });
});
