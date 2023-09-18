import React from 'react';
import { render } from '@testing-library/react';
import { Spin } from '@eflag/design';

describe('Spin', () => {
  it('default indicator should render correctly', () => {
    const { container, asFragment } = render(<Spin />);
    expect(container.querySelector('.ant-spin-eflag')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('gray default indicator should render correctly', () => {
    const { container, asFragment } = render(<Spin gray={true} />);
    expect(container.querySelector('.ant-spin-eflag-gray')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('custom indicator should work', () => {
    const { container, asFragment } = render(
      <Spin indicator={<div className="custom-indicator" />} />
    );
    expect(container.querySelector('.custom-indicator')).toBeTruthy();
    expect(container.querySelector('.ant-spin-eflag')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
