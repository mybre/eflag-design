/**
 * title: 普通按钮模式
 * iframe: true
 */
import React from 'react';
import { message } from '@eflag/design';
import { SideTip } from '@eflag/ui';
import { CloudUploadOutlined } from '@eflag/icons';

export default () => {
  return (
    <SideTip
      icon={<CloudUploadOutlined />}
      hideable={false}
      onClick={() => {
        message.info('点击事件触发');
      }}
    />
  );
};
