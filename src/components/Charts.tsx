import { useContext } from "react";
import {
  LineChart,
  Line,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { AppContext } from "../contexts/AppContext";

type DataItem = {
  name: number;
  carOne: number;
  carTwo: number;
};

const Charts: React.FC<{ dataType: string; unit: string }> = ({
  dataType,
  unit,
}) => {
  const { data } = useContext(AppContext);
  const chartData = (data as Record<string, DataItem[]>)[dataType] || [];

  return (
    <LineChart
      width={450}
      height={300}
      data={chartData}
      margin={{
        top: 50,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        label={{ value: " Time (s)", position: "insideBottomLeft", offset: 0 }}
      />
      <YAxis
        label={{
          value: `${dataType} (${unit})`,
          angle: -90,
          //position: "inside",
          offset: 0,
        }}
      />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="carOne"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="carTwo" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Charts;
