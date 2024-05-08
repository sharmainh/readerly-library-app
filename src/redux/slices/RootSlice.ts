import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        isbn: "Isbn",
        book_title: "Book Title",
        author_name: "Author Name",
        book_length: "Book Length",
        publisher: "Publisher",
        book_format: "Book Format",
    },
    reducers: {
        chooseIsbn: (state, action) => { state.isbn = action.payload},
        chooseBook_Title: (state, action) => { state.book_title = action.payload},
        chooseAuthor_Name: (state, action) => { state.author_name = action.payload},
        chooseBook_Length: (state, action) => { state.book_length = action.payload},
        choosePublisher: (state, action) => { state.publisher = action.payload},
        chooseBook_Format: (state, action) => { state.book_format = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const {  chooseIsbn, chooseBook_Title, chooseAuthor_Name, 
    chooseBook_Length, choosePublisher, chooseBook_Format } = rootSlice.actions