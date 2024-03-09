import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
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

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip bg-white p-3">
//         <p className="label text-base font-medium">{label}</p>
//         <p className="intro text-sm font-medium">{`Vol : ${payload[0].value}`}</p>
//       </div>
//     );
//   }

//   return null;
// };

function WorkoutChart({ height, data, part, xaxis = '', children }) {
  return (
    <div style={{ width: '100%', height: height }}>
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
          <XAxis dataKey={xaxis} />
          <YAxis />
          {children}
          <Area
            type="monotone"
            dataKey="volume"
            stroke={colors[part].stroke}
            fill={colors[part].fill}
            unit="Vol"
            name="Exercise Volume"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WorkoutChart;
