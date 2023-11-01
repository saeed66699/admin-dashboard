import React from "react";
import { BsCurrencyDollar, BsPeopleFill } from "react-icons/bs";
import BarChart from "../components/chartsjsx/BarChart";

import HalfCircle from "../components/chartsjsx/HalfCircle";
import { Stack } from "@mui/material";
export const Charts = () => {
  return (
    <Stack
      sx={{
        height: "max-content",
        width: "97%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        mt: 3,
      }}
    >
      {/* //#E3E4E5  */}
      <BarChart
        chart="bar"
        heading={"Total Earning"}
        iconMainColor={"#E6F7F7"}
        smallIconColor="red"
        smallIconColorbg={"#FFECEA"}
        price={"$20.790"}
        pricediff={"20.1%"}
        icon={<BsCurrencyDollar size={"18px"} />}
        bordercolor="#5EC7C7"
      />
      <BarChart
        chart="line"
        heading={"Top Sales"}
        price={"$65.340"}
        pricediff={"30.89%"}
        smallIconColorbg={"#E3E4E5"}
        iconMainColor={"#E3E4E5"}
        icon={<BsCurrencyDollar size={"18px"} />}
        bordercolor="#5EC7C7"
      />

      <HalfCircle
        heading={"Total Vistors"}
        price={"50M"}
        pricediff={"40.29%"}
        iconMainColor={"#E6F7F7"}
        smallIconColor="red"
        smallIconColorbg={"#FFECEA"}
        icon={<BsPeopleFill size={"18px"} color="red" />}
        bordercolor="#5EC7C7"
      />
    </Stack>
  );
};
