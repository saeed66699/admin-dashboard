import { Stack, Typography, Avatar, AvatarGroup, Paper } from "@mui/material";
import React, { useEffect, useRef } from "react";
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone";
import Chart from "chart.js/auto";

const BarChart = ({
  chart,
  heading,
  pricediff,
  price,
  icon,
  bordercolor,
  iconMainColor,
  smallIconColorbg,
  smallIconColor
}) => {
  const chartContainerRef = useRef(null);
  const chartInstanceRef = useRef(null);
  
  console.log( smallIconColor );
  useEffect(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 35 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
      { year: 2017, count: 35 },
      { year: 2018, count: 20 },
      { year: 2019, count: 45 },
      { year: 2020, count: 35 },
      { year: 2021, count: 30 },
      { year: 2022, count: 55 },
      { year: 2023, count: 40 },
    ];
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    const ctx = chartContainerRef.current.getContext("2d");
    chartInstanceRef.current = new Chart(ctx, {
      type: chart,
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Barchart",
            data: data.map((row) => row.count),
            backgroundColor: "rgba(75, 192, 192, 0.3)",
            borderColor: bordercolor,
            borderWidth: 2,
            pointRadius: 0,
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
            display: false,
          },
          y: {
            display: false,
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
    console.log({ bordercolor });
  }, [bordercolor]);

  return (
    <Paper
      sx={{
        width: 370,
        height: 160,
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 0px 12px 4px rgba(0,0,0,0.1)",m:1
      }} 
    >
      <Stack
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          m: 1,
          // border: "1px solid",
        }}
      >
        <Stack
          sx={{ width: 175, mt: 4, ml: 2, mr: 0, }}
          spacing={1}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ color: "success" }}>$</Avatar> */}
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                backgroundColor: iconMainColor,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              {icon}{" "}
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
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {price}
          </Typography>
          <Stack sx={{ display: "flex", flexDirection: "row",  justifyContent: "space-between" , width: "80px",alignItems: "center"}}>
            <Stack sx={{width: "18px",height: "18px", background: smallIconColorbg, borderRadius: "100%",display: "flex" , justifyContent:"center" , alignItems: "center"}}>
              <ArrowDropUpTwoToneIcon sx={{color: smallIconColor}}  />
            </Stack>

            <Typography variant="h6" sx={{fontSize: "15px", color: "#FF7667"}}>{pricediff}</Typography>
          </Stack>
        </Stack>

        <Stack sx={{ width: "45%", mt: 4 }}>
          <canvas ref={chartContainerRef} id="acquisitions" width="250" />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default BarChart;
