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

export const customTheme = {
  root: {
    base: 'relative w-96',
  },
  popup: {
    root: {
      base: 'absolute top-10 z-50 w-[30rem] pt-2',
      inline: 'relative top-0 z-auto',
      inner: 'rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700',
    },
    header: {
      base: '',
      title:
        'px-2 py-3 text-center font-semibold text-gray-900 dark:text-white',
      selectors: {
        base: 'flex justify-between mb-6',
        button: {
          base: 'text-2xl rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch',
          prev: 'text-3xl',
          next: 'text-3xl',
          view: '',
        },
      },
    },
    view: {
      base: 'p-1',
    },
    footer: {
      base: 'flex mt-6 space-x-2',
      button: {
        base: 'w-full rounded-lg px-5 py-2 text-center text-xl font-medium focus:ring-4 focus:ring-emerald-300',
        today:
          'bg-emerald-700 text-white hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700',
        clear:
          'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
      },
    },
  },
  views: {
    days: {
      header: {
        base: 'grid grid-cols-7 mb-2',
        title:
          'dow h-8 text-center text-xl font-medium leading-6 text-gray-500 dark:text-gray-400',
      },
      items: {
        base: 'grid w-86 grid-cols-7',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-xl font-semibold py-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ',
          selected: 'bg-emerald-700 text-white hover:bg-emerald-600',
          disabled: 'text-gray-500',
        },
      },
    },
    months: {
      items: {
        base: 'grid w-86 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-xl font-semibold p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
          selected: 'bg-emerald-700 text-white hover:bg-emerald-600',
          disabled: 'text-gray-500',
        },
      },
    },
    years: {
      items: {
        base: 'grid w-86 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-xl font-semibold p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900',
          selected: 'bg-emerald-700 text-white hover:bg-emerald-600',
          disabled: 'text-gray-500',
        },
      },
    },
    decades: {
      items: {
        base: 'grid w-86 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-xl font-semibold p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900',
          selected: 'bg-emerald-700 text-white hover:bg-emerald-600',
          disabled: 'text-gray-500',
        },
      },
    },
  },
};
