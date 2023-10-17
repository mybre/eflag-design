import {
  PageContainer,
  ProBreadcrumb,
  ProCard,
  ProLayout,
} from '@ant-design/pro-components';
import { Affix, Button } from '@eflag/design';
import { createStyles } from 'antd-style';


export default () => {
  const useStyles = createStyles(({ token: antToken, css }) => ({

    // 也支持通过 css 字符串模板获得和 普通 css 一致的书写体验
    ProBreadcrumbWrap: css`
    background-color: ${antToken.colorBgBase} !important;
    padding: 10px;
    border: 1px solid rgba(5, 5, 5, 0.06);
  `,
  }));
  const { styles, cx, theme } = useStyles();

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
        ErrorBoundary={false}
        // headerContentRender={() => <ProBreadcrumb />}
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
      >
        <Affix offsetTop={58}>
          <div style={{ padding: '10px 10px 0', background: '#F5F5F5' }}>
            <div className={cx(styles.ProBreadcrumbWrap)}>
              <ProBreadcrumb />
            </div>
          </div>
        </Affix>

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
