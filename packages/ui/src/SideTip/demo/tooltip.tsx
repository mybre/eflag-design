/**
 * title: ToolTip
 * iframe: true
 */

import { CloudUploadOutlined } from '@eflag/icons';
import { message } from '@eflag/design';
import { SideTip } from '@eflag/ui';

export default () => {
  return (
    <SideTip
      type="primary"
      tooltip={{
        title: 'ToolTip 提示',
      }}
      icon={<CloudUploadOutlined />}
      onClick={() => {
        message.info('点击事件触发');
      }}
    />
  );
};
