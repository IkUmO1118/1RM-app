import { Tooltip } from 'recharts';
import WorkoutChart from '../dashboard/WorkoutChart';
import { useParams } from 'react-router-dom';
import { useMoveBack } from '../../hooks/useMoveBack';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-3">
        <p className="label text-base font-medium">{label}</p>
        <p className="intro text-sm font-medium">{`Vol : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const data = [
  {
    date: '01/01',
    volume: 6000,
  },
  {
    date: '01/02',
    volume: 7000,
  },
  {
    date: '01/03',
    volume: 8000,
  },
  {
    date: '01/04',
    volume: 7500,
  },
  {
    date: '01/05',
    volume: 8100,
  },
  {
    date: '01/06',
    volume: 8300,
  },
  {
    date: '01/07',
    volume: 8700,
  },
  {
    date: '01/08',
    volume: 9000,
  },
  {
    date: '01/09',
    volume: 8800,
  },
  {
    date: '01/10',
    volume: 8700,
  },
  {
    date: '01/11',
    volume: 8900,
  },
  {
    date: '01/12',
    volume: 9100,
  },
  {
    date: '01/13',
    volume: 9500,
  },
];

function TrackDetail() {
  // /////////////////////////////
  const moveBack = useMoveBack();
  const { partId } = useParams();

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

      <div className="flex flex-col gap-9 rounded-xl bg-white py-10">
        <h1 className="ml-8 text-4xl font-semibold">Transition volume</h1>
        <WorkoutChart data={data} part={partId} xaxis={'date'} height={400}>
          <Tooltip content={<CustomTooltip />} />
        </WorkoutChart>
      </div>
    </div>
  );
}

export default TrackDetail;
