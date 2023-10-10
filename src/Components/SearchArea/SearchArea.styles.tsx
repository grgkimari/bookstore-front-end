import styled from "@emotion/styled";
import { Button, IconButton, InputBase } from "@mui/material";

export const SearchContainer = styled("div")`
  width: clamp(200px, 30vw, 400px);
  height: 5vh;
  border-radius: 25px;
  border: 2px solid black;
  padding: 2px 0px 2px 4px;
  background-color: antiquewhite;
  display: flex;
  gap: 2px;
`;

export const StyledInputBase = styled(InputBase)`
  width: 86%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: static;
  border-radius: 28px;
`;

export const StyledButton = styled(IconButton)`
  max-width: 22px;
`;
