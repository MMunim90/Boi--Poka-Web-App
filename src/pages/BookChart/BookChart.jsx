import React from "react";
import { useLoaderData } from "react-router";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";


const ResultChart = () => {
    const resultData = useLoaderData();
  return (
    <div>
      <BarChart height={600} width={1700} barCategoryGap={10} barGap={2}  data={resultData}>
        <XAxis dataKey='bookName'></XAxis>
        <YAxis></YAxis>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Bar dataKey='totalPages' fill="#00C29C" />
        <Bar dataKey='rating' fill="#0085F6"></Bar>
      </BarChart>
    </div>
  );
};

export default ResultChart;
