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
        name: 'Eflag Design',
        key: 'ob',
        config: theme,
      }}
      style={{ overflowY: 'hidden' }}
    />
  );
};
