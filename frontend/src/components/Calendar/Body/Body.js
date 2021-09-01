import { DAY_NAMES } from '../utils/calendarConstants';
import { isOldDateMonthsYears } from '../../../lib/date';

import * as s from './styles';

const Body = ({
  arraySize,
  totalDays,
  startDay,
  day,
  today,
  date,
  weekendDays,
  isCurrentMonth,
  isDateMatch,
  firstAvailable,
  clicked,
}) => {
  const isOldDate = isOldDateMonthsYears(firstAvailable, date);

  return (
    <s.Body row key={arraySize}>
      <s.Days row>
        {DAY_NAMES.map((day, index) => (
          <s.Day key={index}>{day}</s.Day>
        ))}
      </s.Days>
      {Array(42)
        .fill(null)
        .map((_, index) => {
          const dayNumber = index - (startDay - 2);
          const olderThanTomorrow =
            (dayNumber < firstAvailable.getDate() && isCurrentMonth) ||
            isOldDate;
          return (
            <s.Day key={index}>
              {index >= startDay - 1 && index <= totalDays + startDay - 2 ? (
                <s.DayNumber
                  alignCenter
                  justifyCenter
                  isSelected={dayNumber === day && isDateMatch}
                  isToday={dayNumber === today.getDate() && isCurrentMonth}
                  isWeekend={weekendDays.includes(dayNumber)}
                  isOld={olderThanTomorrow}
                  onClick={() => clicked(dayNumber)}
                >
                  {dayNumber}
                </s.DayNumber>
              ) : null}
            </s.Day>
          );
        })}
    </s.Body>
  );
};

export default Body;
