import React from 'react';
import { Gauge, useTheme } from '@eflag/charts';

export default () => {
  const themeConfig = useTheme();
  const config = {
    percent: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: [themeConfig.semanticGreen, themeConfig.semanticYellow, themeConfig.semanticRed],
    },
  };
  return <Gauge {...config} />;
};
