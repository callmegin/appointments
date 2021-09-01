import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { daySelected } from 'store/calendarSlice';
import { fetchSlotsData } from 'store/slotsSlice';
import {
  getIsoDateString,
  getFirstDay,
  getWeekendDays,
  isCurrentMonth,
  isDateMatch,
  isLeapYear,
} from '../../lib/date';
import { LEAP_DAYS, REGULAR_DAYS } from './utils/calendarConstants';
import Header from './Header';
import Body from './Body';

import * as s from './styles';

const Calendar = ({ selectedCalendarDate }) => {
  const state = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const today = new Date(state.today);
  const firstAvailable = new Date(state.firstAvailable);
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getFirstDay(date));

  const [weekendDays, setWeekendDays] = useState(getWeekendDays(date));
  const [selectedDate, setSelectedDate] = useState();
  const [matchingDates, setMatchingDates] = useState(
    isDateMatch(date, selectedDate)
  );

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getFirstDay(date));

    setWeekendDays(getWeekendDays(date));
  }, [date]);

  useEffect(() => {
    setMatchingDates(isDateMatch(date, selectedDate));
  }, [date, selectedDate]);

  const requiredDays = isLeapYear(year) ? LEAP_DAYS : REGULAR_DAYS;
  const arraySize = requiredDays[month] + (startDay - 1);

  const handleDateSelect = (dayNumber) => {
    const newDate = new Date(year, month, dayNumber);
    setDate(newDate);
    setSelectedDate(newDate);
    dispatch(daySelected(getIsoDateString(newDate)));
    dispatch(fetchSlotsData({ selectedDate: getIsoDateString(newDate) }));
  };

  const handleMonthChange = (next = false, prev = false) => {
    next && setDate(new Date(year, month + 1, day));
    prev && setDate(new Date(year, month - 1, day));
  };

  return (
    <>
      <s.Calendar>
        <Header year={year} month={month} clicked={handleMonthChange} />
        <Body
          arraySize={arraySize}
          totalDays={requiredDays[month]}
          startDay={startDay}
          day={day}
          today={today}
          date={date}
          weekendDays={weekendDays}
          isCurrentMonth={isCurrentMonth(today, month)}
          isDateMatch={matchingDates}
          firstAvailable={firstAvailable}
          clicked={(dayNumber) => handleDateSelect(dayNumber)}
        />
      </s.Calendar>
    </>
  );
};

export default Calendar;
