import React from "react";
import Chart from "react-apexcharts";

const LineChart = ({ color, title }) => {
  const lineChartOptions = {
    series: [
      {
        name: title,
        data: [5, 100, 75, 73, 20, 14, 60, 55, 50, 8, 0],
      },
    ],
    options: {
      chart: {
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      colors: [color],
      xaxis: {
        labels: {
          show: false, // hides the x-axis labels
        },
        axisBorder: {
          show: false, // hides the x-axis border
        },
        axisTicks: {
          show: false, // hides the x-axis ticks
        },
      },
      yaxis: {
        labels: {
          show: false, // hides the y-axis labels
        },
        axisBorder: {
          show: false, // hides the y-axis border
        },
        axisTicks: {
          show: false, // hides the y-axis ticks
        },
      },
      grid: {
        show: false, // hides the grid lines
      },
    },
  };
  return (
    <Chart
      options={lineChartOptions.options}
      series={lineChartOptions.series}
      height={100}
      width={180}
      type="line"
    />
  );
};

export default LineChart;
