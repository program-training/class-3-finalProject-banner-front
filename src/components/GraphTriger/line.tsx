import React from "react";
import { Line } from "react-chartjs-2";
import { BarChartProps } from "./bar";

const LineChart: React.FC<BarChartProps> = ({ chartData }) => {
  return (
    <div className="chart-line-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            //   text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;