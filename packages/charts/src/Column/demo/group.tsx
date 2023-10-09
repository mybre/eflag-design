import React from 'react';
import { Column } from '@eflag/charts';
import { Col, Row } from '@eflag/design';

export default () => {
  const data = [
    {
      label: 'Mon.',
      type: 'series1',
      value: 2800,
    },
    {
      label: 'Mon.',
      type: 'series2',
      value: 2260,
    },
    {
      label: 'Tues.',
      type: 'series1',
      value: 1800,
    },
    {
      label: 'Tues.',
      type: 'series2',
      value: 1300,
    },
    {
      label: 'Wed.',
      type: 'series1',
      value: 950,
    },
    {
      label: 'Wed.',
      type: 'series2',
      value: 900,
    },
    {
      label: 'Thur.',
      type: 'series1',
      value: 500,
    },
    {
      label: 'Thur.',
      type: 'series2',
      value: 390,
    },
    {
      label: 'Fri.',
      type: 'series1',
      value: 170,
    },
    {
      label: 'Fri.',
      type: 'series2',
      value: 100,
    },
  ];
  const config = {
    isGroup: true,
    xField: 'label',
    yField: 'value',
    seriesField: 'type',
  };
  return (
    <Row gutter={200}>
      <Col span={12}>
        <Column height={250} data={data} {...config} />
      </Col>
      <Col span={12}>
        <Column
          height={250}
          data={data.filter(item => ['Mon.', 'Tues.'].includes(item.label))}
          {...config}
        />
      </Col>
    </Row>
  );
};
