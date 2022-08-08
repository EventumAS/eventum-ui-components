import React from 'react';

import { Col, Grid } from '../Grid';

export default {
  title: 'Grid',
  component: Grid,
};

const Template = (args) => (
  <div style={{ marginTop: 60 }}>
    <h1>Grid</h1>
    <div className="mod">
      <div>Type: s</div>
      <Grid type="s">
        <Col flex={1} style={{ backgroundColor: 'green' }}>
          <p>Col 1/4</p>
        </Col>
        <Col flex={2} style={{ backgroundColor: 'red' }}>
          <p>Col 2/4</p>
        </Col>
        <Col flex={1} style={{ backgroundColor: 'blue' }}>
          <p>Col 1/4</p>
        </Col>
      </Grid>
    </div>
    <div className="mod">
      <div>Type: m</div>
      <Grid type="m">
        <Col flex={1} style={{ backgroundColor: 'green' }}>
          <p>Col 1/4</p>
        </Col>
        <Col flex={2} style={{ backgroundColor: 'red' }}>
          <p>Col 2/4</p>
        </Col>
        <Col flex={1} style={{ backgroundColor: 'blue' }}>
          <p>Col 1/4</p>
        </Col>
      </Grid>
    </div>
  </div>
);

export const GridDemo = Template.bind({});
GridDemo.args = {};
