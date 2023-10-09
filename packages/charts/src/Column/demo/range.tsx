import React from 'react';
import { Column } from '@eflag/charts';
import { Col, Row } from '@eflag/design';

export default () => {
  const data = [
    {
      type: '分类一',
      values: [76, 100],
    },
    {
      type: '分类二',
      values: [56, 108],
    },
    {
      type: '分类三',
      values: [38, 129],
    },
    {
      type: '分类四',
      values: [58, 155],
    },
    {
      type: '分类五',
      values: [45, 120],
    },
    {
      type: '分类六',
      values: [23, 99],
    },
    {
      type: '分类七',
      values: [18, 56],
    },
    {
      type: '分类八',
      values: [18, 34],
    },
  ];
  const config = {
    xField: 'type',
    yField: 'values',
    isRange: true,
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Column height={250} data={data} {...config} />
      </Col>
      <Col span={12}>
        <Column
          height={250}
          data={data.filter(item => ['分类一', '分类二'].includes(item.type))}
          {...config}
        />
      </Col>
    </Row>
  );
};
