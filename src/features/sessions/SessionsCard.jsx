import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../ui/Spinner';
import WorkoutChart from '../dashboard/WorkoutChart';
import { useSessionVolume } from './useSessionVolume';

// sessionsは[[session1], [session2], ...[sessionN]]
// sessions{ session { workout_trackId { (set3 * rep3) } } }
function SessionsCard({ sessions, part }) {
  const navigate = useNavigate();
  const { studentId } = useParams();

  // 部位別の[{〇日, volume:〇}, ... ,{〇日, volume:〇}]をreact queryに追加すると共に、取得する
  const { data: trackData, isLoading } = useSessionVolume(sessions);
  // trackData = [{date: 〇/〇, volume: 0000}, ... {date: 〇/〇, volume: 0000}]

  // const partToId = {
  //   chest: 1,
  //   shoulder: 2,
  //   back: 3,
  //   legs: 4,
  //   arms: 5,
  //   abs: 6,
  // };

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col gap-1 rounded-lg bg-white p-6">
      <h1 className="mb-7 text-2xl font-medium">{part}</h1>
      <WorkoutChart data={trackData} part={part} height={200} />
      <button onClick={() => navigate(`/students/${studentId}/part/${part}`)}>
        詳しくみる
      </button>
    </div>
  );
}

export default SessionsCard;
