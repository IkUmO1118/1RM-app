import { toDate } from 'date-fns';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { eventOfPart } from '../../utils/helpers';

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

function WorkoutAreaChart({
  height,
  data,
  part,
  xaxis = '',
  children,
  fontSize,
  fontWeight,
}) {
  const sortedDataByDate = data.sort((a, b) => toDate(a.date) - toDate(b.date));

  return (
    <div style={{ width: '100%', height: height }}>
      <ResponsiveContainer>
        <AreaChart
          data={sortedDataByDate}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xaxis} />
          <YAxis fontSize={fontSize} fontWeight={fontWeight} />
          {children}
          <Area
            type="monotone"
            dataKey="volume"
            stroke={eventOfPart[part].textColor}
            fill={eventOfPart[part].backgroundColor}
            unit="Vol"
            name="Exercise Volume"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WorkoutAreaChart;
