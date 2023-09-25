//ActionTypes
export const UPDATE_TITLE = "UPDATE_TITLE"
export const UPDATE_ISBN = "UPDATE_ISBN"
export const UPDATE_AUTHOR = "UPDATE_AUTHOR"
export const UPDATE_GENRE = "UPDATE_GENRE"
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
    }
}