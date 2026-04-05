import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export const Chart = ({ data }: any) => (
  <LineChart width={800} height={300} data={data}>
    <XAxis dataKey="timestamp" />
    <YAxis />
    <Tooltip />
    <Line dataKey="price" />
  </LineChart>
);