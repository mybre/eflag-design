/**
 * title: 加载中
 * iframe: true
 */
import React from 'react';
import { SideTip } from '@eflag/ui';
import { HeartOutlined, HeartTwoTone } from '@eflag/icons';

export default () => {
  return (
    <>
      <SideTip
        icon={<HeartTwoTone twoToneColor="#eb2f96" />}
        id="loading"
        loading
        position={{
          right: 100,
        }}
      />
      <SideTip type="primary" icon={<HeartOutlined />} id="loading-primary" loading />
    </>
  );
};
