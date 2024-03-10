import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../ui/Spinner';
import WorkoutChart from '../dashboard/WorkoutChart';
import { usePartSessionVolume } from './usePartSessionVolume';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

// sessionsは[[session1], [session2], ...[sessionN]]
// sessions{ session { workout_trackId { (set3 * rep3) } } }
function SessionsCard({ sessions, part }) {
  const navigate = useNavigate();
  const { studentId } = useParams();

  // 部位別の[{〇日, volume:〇}, ... ,{〇日, volume:〇}]をreact queryに追加すると共に、取得する
  const { data: trackData, isLoading } = usePartSessionVolume(sessions);
  // trackData = [{date: 〇/〇, volume: 0000}, ... {date: 〇/〇, volume: 0000}]

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col gap-1 rounded-xl  p-6 outline-none transition-all duration-200 hover:bg-white">
      <div className="mb-5 flex items-center justify-between">
        <span></span>
        <h1 className="text-2xl font-medium">{`${part}`}</h1>

        <button
          className="rounded-md p-2 transition-all duration-200 hover:bg-slate-100"
          onClick={() => navigate(`/students/${studentId}/part/${part}`)}
        >
          <HiOutlineArrowUpRight className="h-6 w-6" />
        </button>
      </div>

      <WorkoutChart data={trackData} part={part} height={200} />
    </div>
  );
}

export default SessionsCard;
