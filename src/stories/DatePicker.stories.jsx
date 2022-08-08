import React from 'react';

import dateformat from 'dateformat';
import { DateSelectButton } from '../DateSelectButton';
import { SPACING } from '../constants';
import { DatePickerWithData } from '../DatePickerWithData';
import useState from 'storybook-addon-state';

export default {
  title: 'DatePicker',
  component: DatePickerWithData,
};

const Template = (args) => {
  var selectedDate = '';
  const [showDatePicker, set] = useState('date-picker', false);

  const XL = 60;
  const toggleShowDatePicker = () => {
    const newVal = !showDatePicker
    set(newVal)
  };

  const today = dateformat(new Date, 'yyyy-mm-dd')

  return (<div style={{
    marginTop: XL,
    display: "flex",
    flexWrap: "wrap"
  }}>
    <div>
      <h2>DatePicker</h2>
      <DateSelectButton date={selectedDate}
                        locale='en'
                        wrapperStyle={{
                          width: 200,
                          margin: SPACING.M
                        }}
                        onClick={toggleShowDatePicker}/>
      <div>{`The state is ${showDatePicker}`}</div>
      {showDatePicker ? (
        <DatePickerWithData
          onClose={toggleShowDatePicker}
          onDateClick={date => {
            selectedDate = date;
          }}
        />
      ) : null}
    </div>
    <div style={{ flex: 1 }}>
      <h2>Limited by min</h2>
      <DateSelectButton date={selectedDate}
                        locale='en'
                        wrapperStyle={{
                          width: 200,
                          margin: SPACING.M
                        }}
                        onClick={toggleShowDatePicker}/>
      {showDatePicker ? (
        <DatePickerWithData
          onClose={toggleShowDatePicker}
          minDate={today}
          onDateClick={date => {
            selectedDate = date;
          }}
        />
      ) : null}
    </div>
    <div>
      <h2>Limited by `isDateAvailable`</h2>
      <DateSelectButton date={selectedDate}
                        locale='en'
                        wrapperStyle={{
                          width: 200,
                          margin: SPACING.M
                        }}
                        onClick={toggleShowDatePicker}/>
      {showDatePicker ? (
        <DatePickerWithData
          onClose={toggleShowDatePicker}
          isDateAvailable={date => {
            var day = (new Date(date)).getDay();
            return day !== 0 && day !== 6;
          }}
          onDateClick={date => {
            selectedDate = date;
          }}
        />
      ) : null}
    </div>
    <div>
      <h2>Just button</h2>
      <DateSelectButton date={selectedDate}
                        locale='en'
                        placeholder="With placeholder"
                        wrapperStyle={{
                          width: 200,
                          margin: SPACING.M
                        }}
                        onClick={() => {
                          console.log("DateSelect button clicked")
                        }}/>
    </div>
  </div>);
};

export const DatePickerDemo = Template.bind({});

DatePickerDemo.args = {};
