import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPoints = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPoints);

  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxVal={totalMax}
          label={data.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
