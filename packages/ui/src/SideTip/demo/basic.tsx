/**
 * title: 基本使用
 * iframe: true
 */
import React from 'react';
import { message } from '@eflag/design';
import { SideTip } from '@eflag/ui';
import { CloudUploadOutlined } from '@eflag/icons';

export default () => {
  return (
    <SideTip
      type="primary"
      icon={<CloudUploadOutlined />}
      onClick={() => {
        message.info('点击事件触发');
      }}
    />
  );
};
