import { useQuery } from '@tanstack/react-query';
import { getTrack } from '../../services/apiTracks';
import { format } from 'date-fns';

// data == nullの時は0をセットする
function nullSetDefault(value) {
  if (value === null) return 0;
  else return value;
}

// track == nullの時は無視する
function IgnoreNull(value, arr) {
  if (value === null) return;
  else arr.push(value);
}

function calcVolume(data) {
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

async function fetchSessionData(sessions) {
  // ある部位にて、一つ一つのsessionごとに分け、one-sessionのvolumeを算出する
  const sessionDataPromises = sessions.map(async (session) => {
    const idArr = [];

    IgnoreNull(session.workout_track1Id, idArr);
    IgnoreNull(session.workout_track1Id, idArr);
    IgnoreNull(session.workout_track3Id, idArr);
    IgnoreNull(session.workout_track4Id, idArr);

    const data = await getTrack(idArr);
    // 一つのsessino-4種類のworkout-(4set * rep)を算出する
    const sessionVolume = calcVolume(data);
    return {
      date: format(session.created_at, 'MM/dd'),
      volume: sessionVolume,
    };
  });

  return Promise.all(sessionDataPromises);
}

// part別のsessionが[{session1}, ...{sessionN}]となって以下の関数に入る
export function useSessionVolume(sessions) {
  return useQuery({
    queryKey: ['sessionData', sessions[0].workoutMenu],
    queryFn: () => fetchSessionData(sessions),
    staleTime: 0,
  });
}
