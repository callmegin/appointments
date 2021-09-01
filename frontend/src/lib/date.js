import { startOfWeek, lastDayOfWeek, eachWeekendOfMonth } from 'date-fns';

export const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const getIsoDateString = (date) => {
  //offset in milliseconds
  const offset = new Date().getTimezoneOffset() * 60000;
  const isoDate = new Date(date - offset).toISOString().slice(0, -1);
  return isoDate;
};
export const getIsoDate = (date) => {
  const offset = new Date().getTimezoneOffset() * 60000;
  const isoDate = new Date(date - offset);
  return isoDate;
};

export const getFirstDay = (date) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return firstDay === 0 ? 7 : firstDay;
};

export const getWeekRange = (date) => {
  return {
    weekStart: startOfWeek(date, { weekStartsOn: 1 }),
    weekEnd: lastDayOfWeek(date, { weekStartsOn: 1 }),
  };
};

export const getWeekendDays = (date) =>
  eachWeekendOfMonth(date).map((day) => day.getDate());

export const isCurrentMonth = (today, month) => today.getMonth() === month;

export const isDateMatch = (date, selectedDate) =>
  date.getTime() === selectedDate?.getTime();

export const isOldDateMonthsYears = (date, dateToCheck) => {
  return (
    dateToCheck.getMonth() < date.getMonth() ||
    dateToCheck.getFullYear() < date.getFullYear()
  );
};

export const isOldDate = (date, dateToCheck) =>
  dateToCheck.getTime() < date?.getTime();

export const isSameDate = (dateString1, dateString2) =>
  dateString1.slice(0, 10) === dateString2.slice(0, 10);
