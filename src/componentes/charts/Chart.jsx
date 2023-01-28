import "./chart.css";
import { ChartBar } from "./ChartBar";

export const Chart = props => {
  const DataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...DataPointsValues);
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
