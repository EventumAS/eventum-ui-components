import React from 'react';

import { Button } from '../Buttons';

export default {
  title: 'Button',
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  btnStyle: 'primary',
  btnSize: 'm',
};

export const Emphasis = Template.bind({});
Emphasis.args = {
  btnStyle: 'emphasis',
  btnSize: 'm',
};

export const Border = Template.bind({});
Border.args = {
  btnStyle: 'border',
  btnSize: 'm',
};

export const Large = Template.bind({});
Large.args = {
  btnStyle: 'primary',
  btnSize: 'l',
};
