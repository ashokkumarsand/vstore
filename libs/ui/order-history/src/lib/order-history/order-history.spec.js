import React from 'react';
import { render } from '@testing-library/react';
import OrderHistory from './order-history';
describe('OrderHistory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrderHistory />);
    expect(baseElement).toBeTruthy();
  });
});
