import React from 'react';
import { TinyColumn } from '@eflag/charts';
import { Col, Row } from '@eflag/design';

export default () => {
  const data = [274, 337, 81, 497, 666, 219, 269];
  return (
    <Row gutter={200}>
      <Col span={12}>
        <TinyColumn data={data} />
      </Col>
      <Col span={12}>
        <TinyColumn data={data} label={{}} />
      </Col>
    </Row>
  );
};
