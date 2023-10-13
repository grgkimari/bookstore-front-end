import { Alert, AlertTitle } from "@mui/material"
import { AlertContainer, StyledAlert } from "./AlertNotification.styles"
import { useState } from "react"

const AlertNotification = (props) => {
    
    return (
        <StyledAlert severity={props.severity === "" ?  "info" : props.severity} className={props.showAlert ? "alert" : ""}>
            <AlertTitle>{props.title}</AlertTitle>
            {props.message}
            
        </StyledAlert>
    
  )
}

export default AlertNotification