import React from 'react';
import { render } from '@testing-library/react';
import AddressContainer from './address-container';
describe('AddressContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddressContainer />);
    expect(baseElement).toBeTruthy();
  });
});
