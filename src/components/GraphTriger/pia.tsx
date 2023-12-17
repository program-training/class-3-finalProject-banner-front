import React from "react";
import { Pie } from "react-chartjs-2";
import { BarChartProps } from "./bar";

const PieChart: React.FC<BarChartProps> = ({ chartData }) => {

    
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}_${currentDate.getMonth() + 1}_${currentDate.getFullYear()}`;

  return (
    <div className="chart-pie-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              // text: `Rec product that deleted tody: ${formattedDate}`
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;