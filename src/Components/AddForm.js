import SaveIcon from "@mui/icons-material/Save";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useReducer } from "react";
import {
  UPDATE_AUTHOR,
  UPDATE_AUTHOR_ERROR,
  UPDATE_GENRE,
  UPDATE_GENRE_ERROR,
  UPDATE_ISBN,
  UPDATE_ISBN_ERROR,
  UPDATE_TITLE,
  UPDATE_TITLE_ERROR,
  mainReducer,
} from "../Utils/MainReducer";
import { FormContainer } from "./AddForm.styles";
import axios from 'axios'
const initialState = {
  title: "",
  author: "",
  genre: "",
  isbn: "",
  titleError: false,
  authorEror: false,
  genreError: false,
  isbnError: false,
};

const AddForm = () => {
  const [formState, dispatch] = useReducer(mainReducer, initialState);
  console.log(`Form State : ${JSON.stringify(formState)}`);

  const validateForm = () => {
    if (formState.title === "") {
      dispatch({
        type: UPDATE_TITLE_ERROR,
        payload: true,
      });
      
      return false;
    } else if (formState.titleError === true) {
      dispatch({
        type: UPDATE_TITLE_ERROR,
        payload: false,
      });
    } 
    if (formState.author === "") {
      dispatch({
        type: UPDATE_AUTHOR_ERROR,
        payload: true,
      });
      
      return false;
    } else if (formState.authorError === true) {
      dispatch({
        type: UPDATE_AUTHOR_ERROR,
        payload: false,
      });
    } 
    if (formState.isbn === "") {
      dispatch({
        type: UPDATE_ISBN_ERROR,
        payload: true,
      });
      
      return false
    } else if (formState.isbnError === true) {
      dispatch({
        type: UPDATE_ISBN_ERROR,
        payload: false,
      });
    }
     if (formState.genre === "") {
      dispatch({
        type: UPDATE_GENRE_ERROR,
        payload: true,
      });
      
      return false
    } else if(formState.genreError === true){
      dispatch({
        type: UPDATE_GENRE_ERROR,
        payload: false,
      });
    }
    
    return true
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      alert("Please fill all fields.");
    }
    else{
      alert("Success!")
      axios.post('http://localhost:5555/addbook',{
        title : formState.title,
        isbn : formState.isbn,
        author : formState.author,
        genre : formState.genre
      }).then(res => console.log(`Response : ${response}`)).catch(err => console.log(`Error : ${err}`))
    }
  };

  return (
    <FormContainer>
      <TextField
        error={formState.titleError}
        name="title"
        id="title"
        label="Title"
        value={formState.title}
        onChange={(event) => {
          dispatch({
            type: UPDATE_TITLE,
            payload: event.target.value,
          });
        }}
      />
      <TextField
        error={formState.authorError}
        name="author"
        id="author"
        label="Author"
        value={formState.author}
        onChange={(event) => {
          dispatch({
            type: UPDATE_AUTHOR,
            payload: event.target.value,
          });
        }}
      />
      <TextField
        error={formState.isbnError}
        name="isbn"
        id="isbn"
        label="ISBN"
        value={formState.isbn}
        onChange={(event) => {
          dispatch({
            type: UPDATE_ISBN,
            payload: event.target.value,
          });
        }}
      />
      <TextField
        error={formState.genreError}
        name="genre"
        id="genre"
        label="Genre"
        value={formState.genre}
        onChange={(event) => {
          dispatch({
            type: UPDATE_GENRE,
            payload: event.target.value,
          });
        }}
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </FormContainer>
  );
};

export default AddForm;
