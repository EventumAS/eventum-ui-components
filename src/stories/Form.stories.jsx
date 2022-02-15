import React from 'react';

import { Label, Select, TextInput } from '../FormComponents';
import { Col, Grid } from '../Grid';

export default {
  title: 'Form',
  component: Select,
};

const Template = (args) => (
  <div>
    <h1>Inputs</h1>
    <Grid>
      <Col>
        <Select onChange={(v) => {console.log("Selected: ", v)}}
                label="3/4 width of wrapper element"
                wrapperStyle={{width: "75%"}}>
          <option value="1">One</option>
          <option value="2">Two</option>
        </Select>
      </Col>
      <Col>
        <TextInput onChange={(v) => {console.log("Printed: ", v)}}
                   label="Just input..." />
      </Col>
    </Grid>
    <Label label="Label with custom wrapper props" wrapperClass="mrgl" wrapperStyle={{width: "20%"}}/>
    <TextInput onChange={(v) => {console.log("Printed: ", v)}}
               errorMessage="Some Error" hasError />
    <Grid>
      <Col>
        <Label label="Simple label" description="With some desc" />
      </Col>
      <Col>
        <Label label="With otherProps"
               style={{color: "green"}}
               wrapperStyle={{color: "blue"}}
               className="mrgl"
               description="And with wrapperStyle"/>
      </Col>
    </Grid>
  </div>
);

export const FormDemo = Template.bind({});
FormDemo.args = {};
