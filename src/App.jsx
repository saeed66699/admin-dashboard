import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Muitable } from "./components/Muitable";
import { Muinavbar } from "./components/Muinavbar";
import Cartcontainer from "./components/Cartcontainer";

import { Charts } from "./components/Charts";
import BarChart from "./components/BarChart";

import HalfCircle from "./components/HalfCircle";
import SellersAvtar from "./components/SellersAvtar";
import { Stack, Typography } from "@mui/material";
// BsCurrencyDollar
import { BsCurrencyDollar, BsPeopleFill } from "react-icons/bs";
import Pnavbar from "./components/Pnavbar";
function App() {
  useEffect(() => {
    console.log("changescreen");
  }, []);
  return (
    <>
      <Pnavbar />
    </>
  );
}

export default App;
