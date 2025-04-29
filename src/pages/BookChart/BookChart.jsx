import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <path
      d={`M${x},${y + height}C${x + width / 3},${y + height} ${
          x + width / 2
        },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
          x + width
        }, ${y + height}
  Z`}
      stroke="none"
      fill={fill}
    />
  );
};

const ResultChart = () => {
  const resultData = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Boi Poka | Page to Read</title>
      </Helmet>
      <ResponsiveContainer width="100%" height={600}>
      <BarChart data={resultData} barCategoryGap={10} barGap={2} barSize={200}>
        <XAxis dataKey="bookName" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
          <Bar
              dataKey="totalPages"
              shape={<TriangleBar />}
              label={{ position: "top", fill: "#000", fontSize: 14 }}
            >
              {resultData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f"][
                      index % 5
                    ]
                  }
                />
              ))}
            </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default ResultChart;
