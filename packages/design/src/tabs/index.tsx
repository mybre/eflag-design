import { isNullValue } from '@eflag/util';
import { Space, Tabs as AntTabs, Tag } from 'antd';
import React, { useContext } from 'react';
import type { TabsProps as AntTabsProps, TabsPosition as AntTabsPosition } from 'antd/es/tabs';
import type { Tab as AntTab } from 'rc-tabs/es/interface';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useLegacyItems from './hooks/useLegacyItems';
import useStyle from './style';
import TabPane from './TabPane';

export * from 'antd/es/tabs';

export type { TabPaneProps } from './TabPane';

export interface Tab extends AntTab {
  tag?: React.ReactNode;
}

export interface TabsProps extends AntTabsProps {
  items?: Tab[];
}

export type TabsPosition = AntTabsPosition;

const Tabs = ({
  children,
  items,
  type,
  tabPosition,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}: TabsProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('tabs', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const tabsCls = classNames(className);

  const isHorizontal = !tabPosition || tabPosition === 'top' || tabPosition === 'bottom';

  let newItems = items?.map(item => {
    if (!isNullValue(item.tag)) {
      return {
        ...item,
        label: (
          <Space size={4}>
            {item.label}
            <Tag bordered={false} className={`${prefixCls}-tab-tag`}>
              {item.tag}
            </Tag>
          </Space>
        ),
      };
    }
    return item;
  });

  newItems = useLegacyItems(newItems, children, prefixCls);

  return wrapSSR(
    <AntTabs
      items={newItems}
      type={type}
      tabPosition={tabPosition}
      tabBarGutter={!type || type === 'line' ? (isHorizontal ? 24 : 0) : undefined}
      prefixCls={customizePrefixCls}
      className={tabsCls}
      {...restProps}
    />
  );
};

Tabs.TabPane = TabPane;

if (process.env.NODE_ENV !== 'production') {
  Tabs.displayName = AntTabs.displayName;
}

export default Tabs;
