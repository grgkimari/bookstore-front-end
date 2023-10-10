import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { StyledIconButton } from "./AddButton.styles";
const AddButton = () => {
  return (
    <StyledIconButton>
      <AddCircleOutlineIcon
        sx={{
          color: "white",
          fontSize: "2rem",
        }}
      />
    </StyledIconButton>
  );
};

export default AddButton;
