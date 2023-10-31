
import React from "react";
import { Paper, Typography } from "@mui/material";

const paperStyle = {
  padding: "16px",
  textAlign: "center",
};

const boxStyle = {
  margin: "0 auto",
  width: "80%",
  backgroundColor: "#f0f0f0",
  padding: "16px",
  borderRadius: "8px",
};

export const Charts = () => {
  return (
    <Paper style={paperStyle}>
      <div style={boxStyle}>
        <Typography variant="body1" color="initial">
          Total Earning
        </Typography>
        {/* You can add content inside this div */}
      </div>
    </Paper>
  );
};

