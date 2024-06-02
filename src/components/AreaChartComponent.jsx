import React from 'react';
import { Card, Title, AreaChart } from '@tremor/react';

const chartdata = [
  { date: "2021-01-01", SemiAnalysis: 5200, "The Pragmatic Engineer": 3000 },
  { date: "2021-02-01", SemiAnalysis: 4700, "The Pragmatic Engineer": 3300 },
  { date: "2021-03-01", SemiAnalysis: 4900, "The Pragmatic Engineer": 2800 },
  { date: "2021-04-01", SemiAnalysis: 5400, "The Pragmatic Engineer": 3600 },
  { date: "2021-05-01", SemiAnalysis: 6100, "The Pragmatic Engineer": 4100 },
  { date: "2021-06-01", SemiAnalysis: 6600, "The Pragmatic Engineer": 4200 },
  { date: "2021-07-01", SemiAnalysis: 6200, "The Pragmatic Engineer": 4600 },
  { date: "2021-08-01", SemiAnalysis: 7000, "The Pragmatic Engineer": 4800 },
  { date: "2021-09-01", SemiAnalysis: 7600, "The Pragmatic Engineer": 5000 },
  { date: "2021-10-01", SemiAnalysis: 8100, "The Pragmatic Engineer": 5200 },
  { date: "2021-11-01", SemiAnalysis: 8500, "The Pragmatic Engineer": 5500 },
  { date: "2021-12-01", SemiAnalysis: 9000, "The Pragmatic Engineer": 5800 },
  { date: "2022-01-01", SemiAnalysis: 8700, "The Pragmatic Engineer": 6000 },
  { date: "2022-02-01", SemiAnalysis: 9400, "The Pragmatic Engineer": 6200 },
  { date: "2022-03-01", SemiAnalysis: 9800, "The Pragmatic Engineer": 6400 },
  { date: "2022-04-01", SemiAnalysis: 10100, "The Pragmatic Engineer": 6600 },
  { date: "2022-05-01", SemiAnalysis: 10600, "The Pragmatic Engineer": 6800 },
  { date: "2022-06-01", SemiAnalysis: 11200, "The Pragmatic Engineer": 7000 },
  { date: "2022-07-01", SemiAnalysis: 11700, "The Pragmatic Engineer": 7300 },
  { date: "2022-08-01", SemiAnalysis: 11500, "The Pragmatic Engineer": 7500 },
  { date: "2022-09-01", SemiAnalysis: 12000, "The Pragmatic Engineer": 7800 },
  { date: "2022-10-01", SemiAnalysis: 12500, "The Pragmatic Engineer": 8000 },
  { date: "2022-11-01", SemiAnalysis: 13000, "The Pragmatic Engineer": 8300 },
  { date: "2022-12-01", SemiAnalysis: 13500, "The Pragmatic Engineer": 8600 },
  { date: "2023-01-01", SemiAnalysis: 14000, "The Pragmatic Engineer": 8900 },
  { date: "2023-02-01", SemiAnalysis: 14500, "The Pragmatic Engineer": 9200 },
  { date: "2023-03-01", SemiAnalysis: 15000, "The Pragmatic Engineer": 9500 },
  { date: "2023-04-01", SemiAnalysis: 15500, "The Pragmatic Engineer": 9800 },
  { date: "2023-05-01", SemiAnalysis: 16000, "The Pragmatic Engineer": 10100 },
  { date: "2023-06-01", SemiAnalysis: 16500, "The Pragmatic Engineer": 10400 },
  { date: "2023-07-01", SemiAnalysis: 17000, "The Pragmatic Engineer": 10700 },
  { date: "2023-08-01", SemiAnalysis: 17500, "The Pragmatic Engineer": 11000 },
  { date: "2023-09-01", SemiAnalysis: 18000, "The Pragmatic Engineer": 11300 },
  { date: "2023-10-01", SemiAnalysis: 18500, "The Pragmatic Engineer": 11600 },
  { date: "2023-11-01", SemiAnalysis: 19000, "The Pragmatic Engineer": 11900 },
  { date: "2023-12-01", SemiAnalysis: 19500, "The Pragmatic Engineer": 12200 },
];

const dataFormatter = (number) => `$${number.toLocaleString()}`;

const AreaChartComponent = () => {
  return (
    <Card className="mt-4 bg-white text-gray-900">
      <Title>Newsletter revenue over time (USD)</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
        colors={["indigo", "cyan"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
};

export default AreaChartComponent;
