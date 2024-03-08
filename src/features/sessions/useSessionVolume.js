import { useQuery } from '@tanstack/react-query';
import { getTrack } from '../../services/apiTracks';
import { format } from 'date-fns';

function calcVolume(data) {
  // session内にある一つ一つのtrackのvolume(rep * weight)を文、配列にまとめる
  const trackVolume = data.map((track) => {
    return (
      track.set_1 * track.weight_1 +
      track.set_2 * track.weight_2 +
      track.set_3 * track.weight_3 +
      track.set_4 * track.weight_4
    );
  });
  // 一つのsessionのvolumeを全て合算した値をreturnする
  return trackVolume.reduce((acc, cur) => acc + cur, 0);
}

async function fetchSessionData(sessions) {
  // ある部位にて、一つ一つのsessionごとに分け、one-sessionのvolumeを算出する
  const sessionDataPromises = sessions.map(async (session) => {
    const idArr = [
      session.workout_track1Id,
      session.workout_track2Id,
      session.workout_track3Id,
      session.workout_track4Id,
    ];
    const data = await getTrack(idArr);
    // 一つのsessino-4種類のworkout-(4set * rep)を算出する
    const sessionVolume = calcVolume(data);
    return {
      date: format(session.created_at, 'y/MM/dd'),
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
