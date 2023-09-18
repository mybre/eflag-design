/**
 * title: 小尺寸
 * iframe: true
 */

import { CloudUploadOutlined } from '@eflag/icons';
import { useState } from 'react';
import { message } from '@eflag/design';
import { SideTip } from '@eflag/ui';

export default () => {
  const [open, setOpen] = useState(false);

  const handleVisibleChange = () => {
    message.success('点击事件触发');
    setOpen(!open);
  };
  return (
    <SideTip
      type="primary"
      size="small"
      loading
      open={open}
      icon={<CloudUploadOutlined />}
      onClick={handleVisibleChange}
    />
  );
};
