import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import SearchArea from "../SearchArea/SearchArea";
import AddButton from "../AddButton/AddButton";

const TopNavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Typography variant="h6">Book Store</Typography>
        <SearchArea />
        <AddButton />
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
