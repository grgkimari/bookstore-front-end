import styled from "@emotion/styled";
import { Alert } from "@mui/material";

export const StyledAlert = styled(Alert)`
  && {
    position: absolute;
    width: 300px;
    left : calc(50vw - 150px);
    
    @keyframes showAlert {
      0% {
        top: -100px;
        
        
      }
      20% {
        top: 25px;
        
        
      }
      80% {
        top: 25px;
        
        
      }
      100% {
        
        top: -100px;
      }
    }
    animation-name: showAlert;
    animation-duration: 5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
`;
