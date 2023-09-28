//ActionTypes
export const UPDATE_TITLE = "UPDATE_TITLE"
export const UPDATE_ISBN = "UPDATE_ISBN"
export const UPDATE_AUTHOR = "UPDATE_AUTHOR"
export const UPDATE_GENRE = "UPDATE_GENRE"
export const UPDATE_TITLE_ERROR = "UPDATE_TITLE_ERROR"
export const UPDATE_ISBN_ERROR = "UPDATE_ISBN_ERROR"
export const UPDATE_AUTHOR_ERROR = "UPDATE_AUTHOR_ERROR"
export const UPDATE_GENRE_ERROR = "UPDATE_GENRE_ERROR"

export const mainReducer = (formState, action) => {
    switch(action.type){
        case UPDATE_AUTHOR:
            return {
                ...formState,
                author : action.payload
            }
        case UPDATE_GENRE:
            return {
                ...formState,
                genre : action.payload
            }
        case UPDATE_ISBN:
            return {
                ...formState,
                isbn : action.payload
            }
        case UPDATE_TITLE:
            return {
                ...formState,
                title : action.payload
            }
        case UPDATE_TITLE_ERROR:
            
            return {
                ...formState,
                titleError : action.payload
            }
        case UPDATE_AUTHOR_ERROR:
            return {
                ...formState,
                authorError : action.payload
            }
        case UPDATE_GENRE_ERROR:
            return {
                ...formState,
                genreError : action.payload
            }
        case UPDATE_ISBN_ERROR:
            return {
                ...formState,
                isbnError : action.payload
            }
        default:
            return{ ...formState}
    }
}