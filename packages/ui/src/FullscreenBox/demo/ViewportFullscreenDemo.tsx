/**
 * title: 基本使用
 */
import React from 'react';
import { FullscreenBox } from '@eflag/ui';
import { SimpleTable } from './SimpleTable';

export default () => {
  return (
    <FullscreenBox header={{ title: '可全屏表格 - 视口全屏' }}>
      <SimpleTable />
    </FullscreenBox>
  );
};
