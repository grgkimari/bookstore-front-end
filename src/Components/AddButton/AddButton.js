import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { StyledIconButton } from "./AddButton.styles";
import { useNavigate } from "react-router-dom";
const AddButton = () => {
  const navigate = useNavigate()
  return (
    <StyledIconButton
    onClick={() => navigate('/addForm')}
    >
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
