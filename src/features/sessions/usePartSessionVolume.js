import { useQuery } from '@tanstack/react-query';
import { getTrack } from '../../services/apiTracks';
import { format } from 'date-fns';
import { IgnoreNull, calcSessionVolume } from '../../utils/helpers';

async function fetchPartSessionData(sessions) {
  // ある部位にて、一つ一つのsessionごとに分け、one-sessionのvolumeを算出する
  const sessionDataPromises = sessions.map(async (session) => {
    const idArr = [];

    IgnoreNull(session.workout_track1Id, idArr);
    IgnoreNull(session.workout_track1Id, idArr);
    IgnoreNull(session.workout_track3Id, idArr);
    IgnoreNull(session.workout_track4Id, idArr);

    const data = await getTrack(idArr);
    // 一つのsessino-4種類のworkout-(4set * rep)を算出する
    const sessionVolume = calcSessionVolume(data);
    return {
      date: format(session.created_at, 'MM/dd'),
      volume: sessionVolume,
    };
  });

  return Promise.all(sessionDataPromises);
}

// part別のsessionが[{session1}, ...{sessionN}]となって以下の関数に入る
export function usePartSessionVolume(sessions) {
  return useQuery({
    queryKey: ['sessionData', sessions[0].workoutMenu],
    queryFn: () => fetchPartSessionData(sessions),
    staleTime: 0,
  });
}
