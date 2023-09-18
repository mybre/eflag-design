/**
 * title: 不可用
 * iframe: true
 */

import { EditOutlined } from '@eflag/icons';
import { message } from '@eflag/design';
import { SideTip } from '@eflag/ui';

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
