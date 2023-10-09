import React from 'react';
import { Space } from '@eflag/design';
import { Ranger } from '@eflag/ui';

export default () => (
  <Space size={24} direction="vertical">
    <Ranger mode="mini" selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]} />
    <Ranger
      mode="mini"
      quickType="dropdown"
      selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]}
    />
  </Space>
);
