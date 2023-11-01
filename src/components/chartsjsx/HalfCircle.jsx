import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Stack, Typography, Avatar, AvatarGroup, Paper } from "@mui/material";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Doughnut } from "react-chartjs-2";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

ChartJS.register(ArcElement, Tooltip, Legend);

function HalfCircle({
  heading,
  pricediff,
  price,
  icon,
  bordercolor,
  iconMainColor,
  smallIconColorbg,
  smallIconColor,
}) {
  const data = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "Poll",
        data: [46, 54],
        backgroundColor: ["#FF9E90", "#FFECEA"],
        borderColor: ["#FFECEA", "#FFECEA"],
        borderAlign: "inner",
        circumference: 180,
        rotation: 270,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
        // Display legend below the graph
      },
      title: {
        display: false,
      },
      tooltip: { enabled: true },
    },
  };
  const gaugeLabels = {
    id: "gaugeText",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        data,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;
      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.font = "blod 30px sans-serif";
      ctx.fillStyle = "gray";
      ctx.textBaseline = "left";
      ctx.fillText(`Vistors:${data.datasets[0].data[0]}%`, xCenter, yCenter);
    },
  };
  return (
    <Paper
      sx={{
        width: 370,
        height: 160,
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 0px 12px 4px rgba(0,0,0,0.1)",
        m: 1,
      }}
    >
      <Stack
        sx={{
          height: "100%",
          width: "100%",

          display: "flex",
          flexDirection: "row",
          m: 1,
        }}
      >
        <Stack sx={{ width: 175, mt: 4, ml: 2, mr: 0 }} spacing={1}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                backgroundColor:smallIconColorbg,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {icon}
            </div>
            <Typography
              variant="h6"
              sx={{
                marginLeft: "5px",
                fontSize: "15px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              {heading}
            </Typography>
          </Stack>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>{price}</Typography>
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "80px",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  width: "18px",
                  height: "18px",
                  background: smallIconColorbg,
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowDropDownIcon sx={{ color: smallIconColor }} />
              </Stack>
              <Typography variant="h6" sx={{fontSize: "15px", color: "#FF7667"}}>{pricediff}</Typography>
              
            </Stack>
          </Stack>
        </Stack>
        <Stack sx={{ width: "60%", height: "100%" }}>
          <Doughnut
            data={data}
            options={options}
            plugins={[gaugeLabels]}
          ></Doughnut>
        </Stack>
      </Stack>
    </Paper>
  );
}
export default HalfCircle;
