import Button from "./Button"
import Input from "./Input"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseIsbn, chooseBook_Title, chooseAuthor_Name, chooseBook_Length, 
        choosePublisher, chooseBook_Format } from "../redux/slices/RootSlice"

interface LibraryFormProps {
  id?: string[]
}

const LibraryForm = ( props:LibraryFormProps ) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

  const onSubmit =  (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${data.publisher} ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      dispatch(chooseIsbn(data.isbn));
      dispatch(chooseBook_Title(data.book_title));
      dispatch(chooseAuthor_Name(data.author_name));
      dispatch(chooseBook_Length(data.book_length));
      dispatch(choosePublisher(data.publisher));
      dispatch(chooseBook_Format(data.book_format));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
      // props.onClose();
  }
}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '-20px' }} >
           <label htmlFor="make"></label>
           <Input {...register ("isbn")} name='isbn' placeholder="Isbn" />
         </div>
         <div  style={{ marginBottom: '-20px' }} >
           <label htmlFor="book_title"></label>
           <Input {...register ("book_title")}  name='book_title' 
           placeholder="Book Title" 
           />
         </div>
         <div style={{ marginBottom: '-20px' }}>
           <label htmlFor="author_name"></label>
           <Input {...register ("author_name")} name='author_name' 
           placeholder="Author Name" 
           />
         </div>
         <div style={{ marginBottom: '-20px' }}>
           <label htmlFor="book_length"></label>
           <Input {...register ("book_length")} name='book_length' 
           placeholder="Book Length" 
           />
         </div>
         <div style={{ marginBottom: '-20px' }}>
           <label htmlFor="publisher"></label>
           <Input {...register ("publisher")} name='publisher' 
           placeholder="Publisher" 
           />
         </div>
         <div style={{ marginBottom: '-20px' }}>
           <label htmlFor="book_format"></label>
           <Input {...register ("book_format")} name='book_format' 
           placeholder="Book Format" 
           />
         </div>
          <div className=" -mt-10">
            <Button className=" rounded-sm text-center search border-white
             bg-green-950 m-3 text-green-200 p-3 px-20 text-md
            hover:text-white "
            >
              Submit
            </Button>
          </div>
      </form>
    </div>
  )
}

export default LibraryForm