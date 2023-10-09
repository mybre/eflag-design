import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, useToken } from '@eflag/design';
import { PageContainer } from '@eflag/ui';
import { ThemeProvider } from 'antd-style';

describe('ConfigProvider theme with ThemeProvider', () => {
  it('ConfigProvider theme token', () => {
    const Child1 = () => {
      const { token } = useToken();
      expect(token.colorBgLayout).toBe('#F5F8FE');
      return <PageContainer />;
    };
    const Child2 = () => {
      const { token } = useToken();
      expect(token.colorBgLayout).toBe('#F5F8FE');
      return <PageContainer />;
    };
    const Child3 = () => {
      const { token } = useToken();
      expect(token.colorBgLayout).toBe('#ff0000');
      return <PageContainer />;
    };
    render(
      <ConfigProvider>
        <Child1 />
        <ThemeProvider>
          <Child2 />
        </ThemeProvider>
        <ThemeProvider
          theme={{
            token: {
              colorBgLayout: '#ff0000',
            },
          }}
        >
          <Child3 />
        </ThemeProvider>
      </ConfigProvider>
    );
  });
});
