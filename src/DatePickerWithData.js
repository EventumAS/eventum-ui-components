import * as React from 'react';
import _map from 'lodash/fp/map';
import chunk from 'lodash/fp/chunk';
import dateformat from 'dateformat';
import flow from 'lodash/fp/flow';

import { DatePicker } from './DatePicker';

const map = _map.convert({ cap: false });

export function firstWeekDayDate(date, locale) {
  const day = date.getDay();
  const diff =
    locale === "en"
      ? date.getDate() - day + (day === 0 ? -7 : 0)
      : date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
}

export function lastWeekDayDate(date, locale) {
  const day = date.getDay();
  const diff = locale === "en" ? date.getDate() + (6 - day) : date.getDate() + (7 - day);
  return new Date(date.setDate(diff));
}

const lastDate = (year, month) => new Date(year, month + 1, 0);

function dateRange(start, end) {
  const arr = [];
  for(const dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
    arr.push({ date: dateformat(dt, 'yyyy-mm-dd'), status: 'unknown' });
  }
  return arr;
}

function toWeeks(availability) {
  return flow(
    chunk(7),
    map(days => ({ days })),
  )(availability);
}

function nextMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1);
}

function prevMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() - 1);
}

function monthLabel(date: Date): string {
  return `${dateformat.i18n.monthNames[date.getMonth() + 12]} ${date.getFullYear()}`;
}

type Props = {
  envLocale: 'nb' | 'en',
  langLocale: 'nb' | 'en',
  initialDate: ?string,
  selectedDate: ?string,
  minDate?: string,
  onDateClick: () => void,
  onClose: () => void,
  isDateAvailable: ?(string) => boolean,
}

type State = {
  calendarMonthDate: Date,
}

export class DatePickerWithData extends React.Component<Props, State> {
  state = {
    calendarMonthDate: new Date(this.props.initialDate || this.props.selectedDate || new Date()),
  };

  onNextMonthClick = () => this.setState(prevState => ({ calendarMonthDate: nextMonth(prevState.calendarMonthDate) }));

  onPrevMonthClick = () => this.setState(prevState => ({ calendarMonthDate: prevMonth(prevState.calendarMonthDate) }));

  render() {
    const { selectedDate, minDate, onClose, onDateClick, isDateAvailable, envLocale, langLocale } = this.props;
    const { calendarMonthDate } = this.state;
    const year = calendarMonthDate.getFullYear();
    const month = calendarMonthDate.getMonth();

    const weeks = toWeeks(dateRange(firstWeekDayDate(new Date(year, month), envLocale), lastWeekDayDate(lastDate(year, month), envLocale)));

    return (
      <DatePicker
        envLocale={envLocale}
        langLocale={langLocale}
        weeks={weeks}
        onNextMonthClick={this.onNextMonthClick}
        onPrevMonthClick={this.onPrevMonthClick}
        isLoading={false}
        label={monthLabel(calendarMonthDate)}
        onClose={onClose}
        onDateClick={(date) => onDateClick(date)}
        selectedDate={selectedDate}
        minDate={minDate}
        isDateAvailable={isDateAvailable}
      />
    );
  }
}

DatePickerWithData.defaultProps = {
  envLocale: 'nb',
  langLocale: 'en',
}
