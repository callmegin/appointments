import { getIsoDate } from 'lib/date';

export const getFullTime = (date) => {
  const hours = getIsoDate(new Date(date)).getUTCHours();
  const minutes = getIsoDate(new Date(date)).getUTCMinutes();
  const fullTime = `${hours}:${minutes}${minutes}`;
  return fullTime;
};
