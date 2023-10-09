import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, useToken } from '@eflag/design';

describe('ConfigProvider theme', () => {
  it('ConfigProvider theme token', () => {
    const Child1 = () => {
      const { token } = useToken();
      expect(token.colorBgLayout).toBe('#F5F8FE');
      return <div />;
    };
    const Child2 = () => {
      const { token } = useToken();
      expect(token.colorBgLayout).toBe('#ff0000');
      return <div />;
    };
    const Child3 = () => {
      const { token } = useToken();
      expect(token.colorBgLayout).toBe('#ff0000');
      return <div />;
    };
    render(
      <ConfigProvider>
        <Child1 />
        <ConfigProvider
          theme={{
            token: {
              colorBgLayout: '#ff0000',
            },
          }}
        >
          <Child2 />
          <ConfigProvider>
            <Child3 />
          </ConfigProvider>
        </ConfigProvider>
      </ConfigProvider>
    );
  });
});
