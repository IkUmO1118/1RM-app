import Spinner from '../../ui/Spinner';
import WorkoutChart from '../dashboard/WorkoutChart';
import { useSessionVolume } from './useSessionVolume';

// sessionsは[[session1], [session2], ...[sessionN]]
// sessions{ session { workout_trackId { (set3 * rep3) } } }
function SessionsCard({ sessions, part }) {
  // 部位別の[{〇日, volume:〇}, ... ,{〇日, volume:〇}]をreact queryに追加すると共に、取得する
  const { data: trackData, isLoading } = useSessionVolume(sessions);

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col gap-6 bg-white p-6">
      <h1 className="text-2xl font-medium">{part}</h1>
      <WorkoutChart data={trackData} part={part} />
      <div>{part} workout track</div>
    </div>
  );
}

export default SessionsCard;
