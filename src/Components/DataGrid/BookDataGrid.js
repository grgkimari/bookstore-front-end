import {DataGrid} from '@mui/x-data-grid'

const BookDataGrid = () => {
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
            field : "Author",
            headerName : "author",
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
    const dataGridRows = [{
        id : 1,
        isbn : 1,
        title : "Test title 1",
        author : "Test author 1",
        genre : "Test genre 1"
    },
    {
        id : 2,
        isbn : 2,
        title : "Test title 2",
        author : "Test author 2",
        genre : "Test genre 2"
    },
    {
        id : 3,
        isbn : 3,
        title : "Test title 3",
        author : "Test author 3",
        genre : "Test genre 3"
    }
]
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