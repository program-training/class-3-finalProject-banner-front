import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import axios from "axios";
import BarChart from "./bar";
import PieChart from "./pia";
import LineChart from "./line";
import './barStyle.css';

Chart.register(CategoryScale);

export interface DataInterface {
  value: number;
}

export default function ChartDelete() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}_${currentDate.getMonth() + 1}_${currentDate.getFullYear()}`;

  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: DataInterface[];
      backgroundColor: string[];
      borderColor: string;
      borderWidth: number;
    }[];
  }>({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/logs/allHours/${formattedDate}`);
        const newData: DataInterface[] = response.data;
  
        const newChartData = {
          labels: newData.map((_value: DataInterface, index: number) => (index + 1).toString()),
          datasets: [
            {
              label: "Users Gained",
              data: newData,
              backgroundColor: [
                "rgba(75, 192, 192, 1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
              ],
              borderColor: "black",
              borderWidth: 2
            }
          ]
        };
  
        setChartData(newChartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [formattedDate]); 
  return (
    <div>
      <h1 className="title">Delete Rec Graphs</h1>
      <div className="App">
      <div className="styleBarPie">
        <BarChart chartData={chartData} />
      </div>

      <div className="styleBarPie">
        <PieChart chartData={chartData} />
      </div>

      <div className="styleBarPie">
        <LineChart chartData={chartData} />
      </div>
      </div>
    </div>
  );
}


