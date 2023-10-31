import * as React from 'react';import { useEffect, useState } from "react";

import { Muitable } from "./Muitable";

import Cartcontainer from "./Cartcontainer";

import { Charts } from "./Charts";
import BarChart from "./BarChart";

import HalfCircle from "./HalfCircle";
import SellersAvtar from "./SellersAvtar";
import { Stack, Typography } from "@mui/material";
// BsCurrencyDollar
import { BsCurrencyDollar,BsPeopleFill } from 'react-icons/bs';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Dashboard', 'Products', 'User'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
       
        
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography variant="h2">Shoping dashboard</Typography>
      <Stack sx={{width: "100%", height: "max-content" , display: "flex" , justifyContent: 'center' , alignItems: "center"}}>

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
        <BarChart chart="bar" heading={"Total Earning"} iconMainColor={"#E6F7F7"} smallIconColor="red" smallIconColorbg={"#FFECEA"} price={"$20.790"}pricediff={'20.1%'} icon={<BsCurrencyDollar size={"18px"}  />} bordercolor="#5EC7C7"/>
        <BarChart chart="line" heading={"Top Sales"} price={"$65.340"} pricediff={'30.89%'}smallIconColorbg={"#E3E4E5"} iconMainColor={"#E3E4E5"} icon={<BsCurrencyDollar size={"18px"} />}bordercolor="#5EC7C7" />
        

        <HalfCircle heading={"Total Vistors"} price={"50M"} pricediff={'40.29%'} iconMainColor={"#E6F7F7"} smallIconColor="red" smallIconColorbg={"#FFECEA"} icon={<BsPeopleFill size={"18px"} color="red"/>}bordercolor="#5EC7C7"/> 
      </Stack>
        </Stack>
      <Stack
        sx={{
          height: 250,
          width: 550,
          display: "flex",
          flexDirection: "row",
          mt: 3,
        }}
      ><SellersAvtar />
       
      </Stack>
      <Cartcontainer />
      <Muitable /> 
      </Main>
    </Box>
  );
}