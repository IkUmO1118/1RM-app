import { Tooltip } from 'recharts';
import { useParams } from 'react-router';
import { useMoveBack } from '../../hooks/useMoveBack';
import Spinner from '../../ui/Spinner';
import CustomTooltip from '../../ui/CustomTooltip';
import { usePartSession } from './usePartSession';
import WorkoutAreaChart from '../dashboard/WorkoutAreaChart';
import SessionsTable from './SessionsTable';
import WorkoutPieChart from '../dashboard/WorkoutPieChart';

function SessionsDetail({ students_session }) {
  const { partId } = useParams();
  const moveBack = useMoveBack();

  // ページにあるpartIdをfilterしたsessionの配列を作成する
  let filteredSessions = [];
  students_session.forEach((session) => {
    switch (session.session.workoutMenu) {
      case partId:
        filteredSessions.push(session.session);
        break;
      default:
        break;
    }
  });

  // session配列からtrackデータなどをfetchする
  const { data: sessions, isLoading } = usePartSession(filteredSessions);
  if (isLoading) return <Spinner />;

  // query からcacheを得る方法だと、リロードした時にcacheが消滅しもう一度queryを取得しに行かなければいけない
  // つまり、同じページの親要素ではdatabaseから取得し、同じurl内ではreact queryを使用しpropの回数をできるだけ減らす

  return (
    <div className="flex flex-col gap-14">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-semibold text-gray-800">#{partId}</h1>
        <button
          className="text-2xl font-semibold text-green-700"
          onClick={moveBack}
        >
          &larr; Back
        </button>
      </div>

      <div className="flex flex-col gap-9 rounded-xl bg-white p-10">
        <h1 className="text-4xl font-semibold">Trends in Training Volume</h1>
        <WorkoutAreaChart
          data={sessions}
          part={partId}
          xaxis={'date'}
          height={350}
          fontSize={14}
          fontWeight={500}
        >
          <Tooltip content={<CustomTooltip />} />
        </WorkoutAreaChart>
      </div>

      <div className="flex max-h-[410px] items-start gap-8">
        <div className="flex flex-grow flex-col gap-8 rounded-xl bg-white p-8">
          <h1 className="text-4xl font-semibold">Training menu table</h1>
          <SessionsTable sessions={sessions} isLoading={isLoading} />
        </div>

        <div className="flex w-[320px] flex-col rounded-xl bg-white pb-10">
          <h1 className="ml-8 mt-8 text-4xl font-semibold">
            Training menu summary
          </h1>
          <WorkoutPieChart
            sessions={sessions}
            isLoading={isLoading}
            height={340}
          />
        </div>
      </div>

      <div className="bg-red-600">
        <p>1RMの計測</p>
      </div>
    </div>
  );
}

export default SessionsDetail;
