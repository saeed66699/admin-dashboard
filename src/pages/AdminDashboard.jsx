import React from "react";
import { Muitable } from "./Muitable";
import Cartcontainer from "./Cartcontainer";
import SellersAvtar from "../components/SellersAvtar";
import { Stack, Typography } from "@mui/material";
import { Charts } from "./Charts";
export const AdminDashboard = () => {
  return (
    <Stack> 
      <Stack
        sx={{
          width: "100%",
          height: "max-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Charts />
      </Stack>
      <Stack
        sx={{
          height: 250,
          width: 550,
          display: "flex",
          flexDirection: "row",
          mt: 3,
        }}
      >
        <SellersAvtar />   
      </Stack>
      <Stack>     
      <Cartcontainer />
      <Muitable />
        </Stack>
    </Stack>
  );
};
