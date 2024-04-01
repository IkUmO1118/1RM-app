import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import Spinner from '../../ui/Spinner';
import { getSelectedWorkouts } from '../../services/apiWorkouts';
import { useEffect, useState } from 'react';

async function prepareData(sessions) {
  const workoutIdHash = {};
  const colors = [
    '#f87171',
    '#fbbf24',
    '#a3e635',
    '#34d399',
    '#60a5fa',
    '#a78bfa',
    '#e879f9',
  ];

  sessions.reduce((acc, session) => {
    for (let i = 1; i <= 4; i++) {
      const workoutId = session[`workout_${i}Id`];
      if (workoutId !== null) {
        if (workoutIdHash[workoutId]) {
          workoutIdHash[workoutId]++;
        } else {
          workoutIdHash[workoutId] = 1;
        }
      }
    }
    return acc;
  }, []);

  const workoutArr = await getSelectedWorkouts(Object.keys(workoutIdHash));

  const workoutNameHash = {};
  workoutArr.forEach((workout) => {
    workoutNameHash[workout.id] = workout.workoutName;
  });

  const generatedTestdata = Object.entries(workoutIdHash).map(
    ([workoutId, count], index) => {
      return {
        workoutName: workoutNameHash[workoutId],
        value: count,
        color: colors[index],
      };
    },
  );

  return generatedTestdata;
}

function WorkoutPieChart({ sessions, isLoading, height }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading) {
        const preparedData = await prepareData(
          sessions.map((session) => session.session),
        );
        setData(preparedData);
      }
    };

    fetchData();
  }, [sessions, isLoading]);

  if (isLoading) return <Spinner />;

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
          wrapperStyle={{
            fontSize: '1.2rem',
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default WorkoutPieChart;
