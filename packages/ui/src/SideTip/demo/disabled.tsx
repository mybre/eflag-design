/**
 * title: 不可用
 * iframe: true
 */
import React from 'react';
import { message } from '@eflag/design';
import { SideTip } from '@eflag/ui';
import { EditOutlined } from '@eflag/icons';

export default () => {
  return (
    <SideTip
      disabled
      icon={<EditOutlined />}
      onClick={() => {
        message.info('点击事件触发');
      }}
    />
  );
};
