import {
  PageContainer,
  ProBreadcrumb,
  ProCard,
  ProLayout,
} from '@ant-design/pro-components';
import { Affix, Button, ConfigProvider, Tabs, theme } from '@eflag/design';
import { css } from '@emotion/css';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@eflag/icons';
import { useState } from 'react';
export default () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = theme.useToken();
  const items = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
      label: `Tab ${id}`,
      key: id,
    };
  });
  const tabBarCollapse = {
    left:
      <div
        onClick={() => setCollapsed(!collapsed)}
        style={{ cursor: 'pointer', paddingRight: '10px' }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
  }

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        location={{
          pathname: '/admin/process/edit/123',
        }}
        layout="mix"
        collapsed={collapsed}
        onCollapse={setCollapsed}
        collapsedButtonRender={false}
        ErrorBoundary={false}
        breadcrumbRender={(routers = []) => [
          {
            path: '/',
            title: '主页',
          },
          {
            path: '/',
            title: '测试页',
          },
          ...routers,
        ]}
        menuDataRender={() => [
          {
            path: '/welcome',
            name: '欢迎',
          },
          {
            path: '/admin',
            name: '管理',
            children: [
              {
                name: '申请单列表',
                path: '/admin/process',
              },
              {
                name: '申请单详情',
                path: '/admin/process/detail/:id',
                hideInMenu: true,
              },
              {
                name: '编辑申请单',
                path: '/admin/process/edit/:id',
                hideInMenu: true,
              },
              {
                name: '添加申请单',
                path: '/admin/process/add',
                hideInMenu: true,
              },
            ],
          },
        ]}
        token={{ header: { heightLayoutHeader: 58 } }}
      >
        <Affix offsetTop={59}>
          <div className={css`
               background: ${token.colorBgBase};
               padding: 4px 10px 0;
              `}>
            <ConfigProvider theme={{
              components: {
                Tabs: {
                  horizontalMargin: '0'
                },
              },
            }}>
              <Tabs size="small" hideAdd type="editable-card" tabBarExtraContent={tabBarCollapse} items={items} />
            </ConfigProvider>
          </div>
        </Affix>

        {/* <Affix offsetTop={116}>
          <div style={{ padding: '10px', background: '#F5F5F5' }}>
            <div className={css`
               background: ${token.colorBgBase};
               padding: 4px 10px;
               border-radius: 3px;
              `}>
              <ProBreadcrumb />
            </div>
          </div>
        </Affix> */}


        <PageContainer header={{ title: false }} breadcrumbRender={false}>
          <ProCard
            direction="column"
            ghost
            gutter={[0, 16]}
            style={{
              height: '200vh',
            }}
          >
            <ProCard style={{ height: 200 }} />
            <ProCard gutter={16} ghost style={{ height: 200 }}>
              <ProCard colSpan={16} />
              <ProCard colSpan={8} />
            </ProCard>
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  )
};

