import React, { useEffect, useReducer } from 'react'
import { UPDATE_TITLE, mainReducer } from '../Utils/MainReducer'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import { FormContainer } from './AddForm.styles';

const initialState = {
    title : "",
    author : "",
    genre : "",
    isbn : ""
}


const AddForm = () => {
  const [formState, dispatch] = useReducer(mainReducer, initialState)
  

  return (
    <FormContainer>
        <TextField
        name = "title"
        id='title'
        label="Title"
        value={formState.title}
        onChange={(event) => {console.log("Dispatching update title action with value : " + event.target.value);
        dispatch({
          type : UPDATE_TITLE,
          payload : event.target.value
        })}}
        />
        <TextField
        name = "author"
        id='author'
        label="Author"
        />
        <TextField
        name = "isbn"
        id='isbn'
        label="ISBN"
        />
        <TextField
        name = "genre"
        id='genre'
        label="Genre"
        />
        <Button variant='contained' startIcon={<SaveIcon />}>Save</Button>
    </FormContainer>
  )
}

export default AddForm