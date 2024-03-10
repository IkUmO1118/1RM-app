import { formatDistance, parseISO } from 'date-fns';
import { differenceInDays } from 'date-fns';

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
    value,
  );

// data == nullの時は0をセットする
export function nullSetDefault(value) {
  if (value === null) return 0;
  else return value;
}

// track == nullの時は無視する
export function IgnoreNull(value, arr) {
  if (value === null) return;
  else arr.push(value);
}

export function calcSessionVolume(data) {
  // session内にある一つ一つのtrackのvolume(rep * weight)を文、配列にまとめる
  const trackVolume = data.map((track) => {
    return (
      nullSetDefault(track.set_1) * nullSetDefault(track.weight_1) +
      nullSetDefault(track.set_2) * nullSetDefault(track.weight_2) +
      nullSetDefault(track.set_3) * nullSetDefault(track.weight_3) +
      nullSetDefault(track.set_4) * nullSetDefault(track.weight_4)
    );
  });
  // 一つのsessionのvolumeを全て合算した値をreturnする
  return trackVolume.reduce((acc, cur) => acc + cur, 0);
}
