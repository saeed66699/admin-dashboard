import { Stack, Typography, Avatar, Paper } from "@mui/material";
import React, { useEffect, useRef } from "react";
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone";
import Chart from "chart.js/auto";

export const BarChart = ({ heading, price }) => {
  const chartContainerRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Define your data
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    // Destroy the previous chart when the component is mounted or updated
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    const ctx = chartContainerRef.current.getContext("2d");
    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Barchart",
            data: data.map((row) => row.count),
            
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltips: { enabled: false },
          title: { display: false },
          datalabels: { display: false },
        },
        scales: {
          x: {
            display: false, // Hide the x-axis
          },
          y: {
            display: false, // Hide the y-axis
          },
        },
        layout: {
          padding: {
            top: 0,
            right: 1,
            bottom: 0,
            left: 0,
          },
        },
      },
    });
  }, []);

  return (
    <Paper sx={{ width: 530, m: 1 }}>
      <Stack
        sx={{
          height: 180,
          width: 530,
          display: "flex",
          flexDirection: "row",
          m: 2,
        }}
      >
        <Stack sx={{ width: 200, mt: 4, ml: 2 }} spacing={2}>
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
            <Avatar sx={{ color: "success" }}>$</Avatar>
            <Typography variant="h5">{heading}</Typography>
          </Stack>
          <Typography>{price}</Typography>
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
            <ArrowDropUpTwoToneIcon />
            <Typography variant="h5">$26.5</Typography>
          </Stack>
        </Stack>

        <Stack sx={{ width: 350, mt: 4 }}>
          <canvas ref={chartContainerRef} id="acquisitions" width="250" />
        </Stack>
      </Stack>
    </Paper>
  );
};
