import React from 'react';

import { LocaleSelectorWithState } from '../LocaleSelector';
import { SPACING } from '../constants';

const XL = 60;

export default {
  title: 'LocaleSelector',
  component: LocaleSelectorWithState,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ marginTop: XL }}>
    <h1>LocaleSelector</h1>
    <div style={{ position: 'relative', margin: SPACING.M, textAlign: 'right', width: 200 }}>
      <LocaleSelectorWithState {...args} onSelect={locale => console.log(locale)} />
    </div>
  </div>
);

export const LocaleSelector = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LocaleSelector.args = {
  locale: 'nb',
};
