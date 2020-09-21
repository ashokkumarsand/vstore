import React from 'react';
import { render } from '@testing-library/react';
import AddressModal from './address-modal';
describe('AddressModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddressModal />);
    expect(baseElement).toBeTruthy();
  });
});
