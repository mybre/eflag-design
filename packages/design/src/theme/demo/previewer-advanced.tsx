/**
 * transform: true
 * compact: true
 */
import { theme } from '@eflag/design';
import { Previewer } from 'antd-token-previewer';

export default () => {
  return (
    <Previewer
      theme={{
        name: 'eflag Design',
        key: 'ob',
        config: theme,
      }}
    />
  );
};
