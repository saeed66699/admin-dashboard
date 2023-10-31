import React from "react";
import {
  Paper,
  Stack,
  Avatar,
  AvatarGroup,
  Typography,
  Button,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function SellersAvtar() {
  return (
    <Paper >
      <Stack sx={{width: 270,height:220,m: 2}} alignContent="center">
        <Typography variant="h5" sx={{ font: "bold sans-serif" }}>
          TopSeller
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <Button variant="outlined" size="small" color="success">
            Trending
          </Button>
          <Typography variant="span">
            <LocationOnOutlinedIcon /> Faisal Town Lahore
          </Typography>
        </Stack>
        <Typography sx={{ m: 2 }}>ES Solutions</Typography>
        <Stack direction="row" spacing={1} sx={{ m: 1 }}>
          <AvatarGroup max={5}>
            <Avatar src="https://plus.unsplash.com/premium_photo-1658506877703-9e0e9ae498a6?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar src="https://plus.unsplash.com/premium_photo-1658506877703-9e0e9ae498a6?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar src="https://plus.unsplash.com/premium_photo-1658506877703-9e0e9ae498a6?auto.format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar src="https://plus.unsplash.com/premium_photo-1658506877703-9e0e9ae498a6?auto.format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar src="https://plus.unsplash.com/premium_photo-1658506877703-9e0e9ae498a6?auto.format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar src="https://plus.unsplash.com/premium_photo-1658506877703-9e0e9ae498a6?auto.format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar src="https://plus.unsplash.com/premium_photo-1658506877703-9e0e9ae498a6?auto.format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Avatar src="https://plus.unsplash.com/premium_photo-1658506877703-9e0e9ae498a6?auto.format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </AvatarGroup>
        </Stack>
      </Stack>
    </Paper>
  );
}
