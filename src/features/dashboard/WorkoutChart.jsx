import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const colors = {
  chest: { stroke: '#047857', fill: '#d1fae5' },
  shoulder: { stroke: '#b91c1c', fill: '#fee2e2' },
  back: { stroke: '#1d4ed8', fill: '#dbeafe' },
  legs: { stroke: '#a21caf', fill: '#fae8ff' },
  arms: { stroke: '#6d28d9', fill: '#ede9fe' },
  abs: { stroke: '#b45309', fill: '#fef3c7' },
};

function WorkoutChart({ data, part }) {
  return (
    <div style={{ width: '100%', height: 150 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: '#ffffff' }} />
          <Area
            type="monotone"
            dataKey="volume"
            stroke={colors[part].stroke}
            fill={colors[part].fill}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WorkoutChart;
