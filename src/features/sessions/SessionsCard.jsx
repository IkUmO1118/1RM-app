import { useEffect, useState } from 'react';
import Spinner from '../../ui/Spinner';
import WorkoutChart from '../dashboard/WorkoutChart';
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

// sessionsは[[session1], [session2], ...[sessionN]]
// sessions{ session { workout_trackId { (set3 * rep3) } } }
function SessionsCard({ sessions, part }) {
  const [trackData, setTrackData] = useState([]);

  useEffect(() => {
    // 'chest session'をすべて周回し、それぞれのsessionのworkoutのvolumeを計算する
    const fetchSessionData = async () => {
      const sessionDataPromises = sessions.map(async (session) => {
        const idArr = [
          session.workout_track1Id,
          session.workout_track2Id,
          session.workout_track3Id,
          session.workout_track4Id,
        ];

        // 一つのsession内のtrackが４つ入っている配列[track1, ... track4]を受け取る
        const data = await getTrack(idArr);
        // 一つのsessionのvolumeを合算する
        const sessionVolume = calcVolume(data);

        return {
          date: format(session.created_at, 'MM/dd'),
          volume: sessionVolume,
        };
      });

      const sessionData = await Promise.all(sessionDataPromises);
      setTrackData(sessionData);
    };

    fetchSessionData();
  }, [sessions]);

  if (!trackData.length) return <Spinner />;

  return (
    <div className="flex flex-col gap-6 bg-white p-6">
      <h1 className="text-2xl font-medium">{part}</h1>
      <WorkoutChart data={trackData} part={part} />
      <div>{part} workout track</div>
    </div>
  );
}

export default SessionsCard;
