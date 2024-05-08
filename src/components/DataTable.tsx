import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';


const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90},
    { field: 'isbn', headerName: "Isbn", flex: 1},
    { field: 'book_title', headerName: "Book Title", flex: 1},
    { field: 'author_name', headerName: "Author Name", flex: 1},
    { field: 'book_length', headerName: "Book Length", flex: 1},
    { field: 'publisher', headerName: "Publisher", flex: 1},
    { field: 'book_format', headerName: "Book Format", flex: 1},
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { libraryData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<any>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
 } 

  return (
    <>
    <Modal
        id={selectionModel}
        open={open}
        onClose={handleClose}
    />

    <div className="flex flex-row mt-12 justify-center ml-24 container">
        <div>
            <button className="p-3 bttn rounded m-3
             border-white hover:bg-green-200"
            onClick={ () => handleOpen()}
             >
                    Add New Book
            </button>
            </div> 
           
            <Button onClick={handleOpen} className="p-3 rounded 
              border-white hover:bg-green-200 m-3 bttn"
              // onClick={handleOpen}
              >
                Update 
            </Button>
            <Button onClick={deleteData} className="p-3 bttn rounded 
              border-white hover:bg-green-200 m-3" 
              // onClick={deleteData}
              >
                Delete
            </Button>
        </div>
     <div className={ open ? "hidden" : "container mx-24  my-12 flex flex-col"}
     style={{ height: 350,
     backgroundColor: 'white',}}
     >
      
            <DataGrid 
            sx={{ width: '203%', maxWidth: '80em', marginLeft: '5em'}}
                rows={libraryData} 
                columns={columns} 
                checkboxSelection={true}
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                onRowSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}  
            />
    </div> 
    </>
      
  )
}

export default DataTable