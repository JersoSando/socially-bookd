import React, { useContext, createContext, useState } from "react";


export const appContext = createContext()
export const useSocialContext = () => useContext(appContext)

const SociallyBookedContextProvider = ({children}) => {
    const [bookList, setBookList] = useState([]);
    const [currentPage, setLocation] = useState("HOME")
    const [userMessage, setUserMessage] = useState('')
    const globalState = {
        bookList,
        currentPage,
        userMessage
    }

    const getBookList = (bookListArray) => setBookList(bookListArray)
    const handlePageChange = (nextLocation) => {
        setLocation(nextLocation)
    }

    const setUserLogin = (loginRes) => {
        setUserMessage(loginRes)
        setLocation("DASHBOARD")
    }

    return (
        <appContext.Provider
        value={{
            ...globalState,
            getBookList,
            handlePageChange,
            setUserLogin
        }}>
            {children}
        </appContext.Provider>
    )
    
}

export default SociallyBookedContextProvider