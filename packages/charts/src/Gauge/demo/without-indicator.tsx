import React from 'react';
import { Gauge } from '@eflag/charts';
import type { GaugeConfig } from '@eflag/charts';

export default () => {
  const config: GaugeConfig = {
    percent: 0.75,
    indicator: false,
    innerRadius: 0.75,
  };
  return <Gauge {...config} />;
};
