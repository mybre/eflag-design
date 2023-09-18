/**
 * title: 加载中
 * iframe: true
 */

import { HeartOutlined, HeartTwoTone } from '@eflag/icons';
import { SideTip } from '@eflag/ui';

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
