import React from 'react';
import { Pie } from '@eflag/charts';
import type { PieConfig } from '@eflag/charts';
import { Col, Row } from '@eflag/design';

export default () => {
  const data = [
    {
      type: '分类一',
      value: 32,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 20,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config1: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
    isDonut: true,
  };
  const config2: PieConfig = {
    ...config1,
    legend: {
      position: 'bottom',
    },
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Pie height={300} {...config1} />
      </Col>
      <Col span={12}>
        <Pie height={300} {...config2} />
      </Col>
    </Row>
  );
};
