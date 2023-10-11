import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import SearchArea from "../SearchArea/SearchArea";
import AddButton from "../AddButton/AddButton";
import { useNavigate } from "react-router-dom";

const TopNavBar = () => {
  const navigate = useNavigate()
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Typography variant="h6" onClick={() => navigate('/')}>Book Store</Typography>
        <SearchArea />
        <AddButton />
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
