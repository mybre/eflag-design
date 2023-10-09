/**
 * transform: true
 * compact: true
 */
import { theme } from '@eflag/design';
import { PreviewDemo } from 'antd-token-previewer';

export default () => {
  return (
    <PreviewDemo
      theme={{
        name: 'eflag Design',
        key: 'ob',
        config: theme,
      }}
      style={{ overflowY: 'hidden' }}
    />
  );
};
