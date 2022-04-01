import { createContext, useReducer } from "react";


export const SearchContext = createContext()

const searchReducer = (state, action) => {
    switch(action.type) {
        case "GET_BOOKLIST":
            return {...state, bookList: action.payload}
            default:
                return state
    }
}

export const SearchProvider = ({ children }) => {
    const [state, dispatch] = useReducer(searchReducer, {bookList: []})
    const getBookList = (bookListArray) => {dispatch({type: "GET_BOOKLIST", payload: bookListArray})}
    return (
        <SearchContext.Provider value={{...state, getBookList}}>
            {children}
        </SearchContext.Provider>
    )
}