import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './chart.css';

const data = [
  { name: 'January', Total: 1130 },

  { name: 'March', Total: 980 },

  { name: 'May', Total: 2150 },

  { name: 'July', Total: 1690 },

  { name: 'September', Total: 1450 },

  { name: 'November', Total: 1980 },
];

const Chart = () => {
  return (
    <div className="chart-container">
      <div className="chart-title">Last 12 Months</div>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" stroke="rgb(177, 177, 177)" />
          <CartesianGrid strokeDasharray="3 3" className="cart-grid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stackId="1"
            stroke="rgb(32, 217, 156)"
            fill="rgb(32, 217, 156)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
