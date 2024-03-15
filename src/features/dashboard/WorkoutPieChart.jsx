import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import Spinner from '../../ui/Spinner';

const data = [
  { workoutName: 'dumbbell press 15°', value: 4, color: '#f97316' },
  { workoutName: 'pec fly', value: 3, color: '#eab308' },
  { workoutName: 'incline chest press', value: 6, color: '#84cc16' },
  { workoutName: 'decline smith press', value: 4, color: '#22c55e' },
  // { workoutName: '8-14 nights', value: 3, color: '#14b8a6' },
  // { workoutName: '15-21 nights', value: 1, color: '#3b82f6' },
];

function prepareData(sessions) {}

function WorkoutPieChart({ sessions, isLoading, height }) {
  if (isLoading) return <Spinner />;

  // const data = prepareData(sessions);

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          nameKey="workoutName"
          dataKey="value"
          innerRadius={85}
          outerRadius={110}
          cx="50%"
          // cy="50%"
          paddingAngle={3}
        >
          {data.map((entry) => (
            <Cell
              fill={entry.color}
              stroke={entry.color}
              key={entry.workoutName}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          align="center"
          width="80%"
          layout="vertical"
          iconSize={15}
          iconType="circle"
          // wrapperStyle={{ paddingBottom: 20 }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default WorkoutPieChart;
