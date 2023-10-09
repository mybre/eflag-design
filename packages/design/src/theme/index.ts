import { theme } from 'antd';

export * from 'antd/es/theme/internal';
export * from 'antd/es/theme';

const defaultSeed = {
  ...theme.defaultSeed,
  colorPrimary: '#0085d0',
  colorInfo: '#0085d0',
  colorSuccess: '#0ac185',
  colorWarning: '#ffac33',
  colorError: '#ff4b4b',
  borderRadius: 3,
  // 以下四种预设颜色和语义色保持一致
  blue: '#0085d0',
  green: '#0ac185',
  yellow: '#ffac33',
  red: '#ff4b4b',
};

// should use reference assign instead of clone assign
const defaultConfig = theme.defaultConfig;
defaultConfig.token = defaultSeed;

export default {
  ...theme,
  defaultSeed,
  defaultConfig,
  components: {
    InputNumber: {
      handleVisible: true as true,
    },
  },
};
