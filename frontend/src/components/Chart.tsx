import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export const Chart = ({ data }: any) => (
  <ResponsiveContainer width="100%" height={320}>
    <LineChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 8 }}>
      <XAxis dataKey="timestamp" minTickGap={24} />
      <YAxis width={56} />
      <Tooltip />
      <Line dataKey="price" stroke="#1976d2" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
);