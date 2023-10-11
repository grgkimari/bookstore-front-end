import { jsx } from '@emotion/react'
import {DataGrid} from '@mui/x-data-grid'
import axios from 'axios'
import { useEffect, useState } from 'react';


  

const BookDataGrid = () => {
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        const fetchStartData = async () => {
            try {
              const response = await axios.get('http://localhost:5555/start');
              setBooks(response.data); 
            } catch (err) {
              console.error(err);
            }
          };
          fetchStartData()
          
    }, [])
     
    const dataGridColumns = [
        {
            field : "isbn",
            headerName : "ISBN",
            width : 100,
            editable : true
        },
        {
            field : "title",
            headerName : "Title",
            width : 200,
            editable : true
        },
        {
            field : "author",
            headerName : "Author",
            width : 100,
            editable : true
        },
        {
            field : "genre",
            headerName : "Genre",
            width : 100,
            editable: true
        }
    ]
    
    const dataGridRows = books.length === 0 ? [] : books.map((book) =>{
        book["id"] = book._id
        return book
    })
  return (
    <DataGrid rows={dataGridRows} columns={dataGridColumns} initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick/>
    
  )
}

export default BookDataGrid