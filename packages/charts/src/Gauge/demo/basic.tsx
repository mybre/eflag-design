import React from 'react';
import { Gauge } from '@eflag/charts';

export default () => {
  const config = {
    percent: 0.75,
  };
  return <Gauge {...config} />;
};
