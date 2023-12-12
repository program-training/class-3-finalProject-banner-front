import { Bar } from "react-chartjs-2";
import './barStyle.css'
import { DataInterface } from "./ChartDelete";

export interface BarChartProps {
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: DataInterface[];
      backgroundColor: string[];
      borderColor: string;
      borderWidth: number;
    }[];
  };
}

 const BarChart: React.FC<BarChartProps> = ({ chartData }) => {

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}_${currentDate.getMonth() + 1}_${currentDate.getFullYear()}`;

  return (
    <div className="chart-bar-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              // text: `Rec product that deleted tody: ${formattedDate}`
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};

export default BarChart