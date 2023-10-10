import React from "react";
import {
  SearchContainer,
  StyledInputBase,
  StyledButton,
} from "./SearchArea.styles.tsx";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

const SearchArea = () => {
  return (
    <SearchContainer>
      <StyledButton>
        <SearchIcon
          sx={{
            color: "black",
          }}
        />
      </StyledButton>
      <StyledInputBase />
    </SearchContainer>
  );
};

export default SearchArea;
