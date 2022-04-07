import React, { useContext, createContext, useState, useEffect } from "react";


export const appContext = createContext()
export const useSocialContext = () => useContext(appContext)

const SociallyBookedContextProvider = ({children}) => {
    // default states ---------------------------------------
    const [bookList, setBookList] = useState([]);
    const [currentPage, setLocation] = useState("HOME")    
    const [userInfoObj, setuserInfoObj] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    // hanlder functions ------------------------------------
    const getBookList = (bookListArray) => setBookList(bookListArray)
    
    const handlePageChange = (nextLocation) => {
        setLocation(nextLocation)
    }

    const setUserLogin = (loginRes) => {
        setuserInfoObj(loginRes)
        setIsLoggedIn(true)
        setLocation("DASHBOARD")
        window.localStorage.setItem('userInfoObj', JSON.stringify(loginRes))
        window.localStorage.setItem('isLoggedIn', true)
    }

    const logout = () => {
        setuserInfoObj({})
        setIsLoggedIn(false)
        setLocation('HOME')
        window.localStorage.removeItem('isLoggedIn')
        window.localStorage.removeItem('userInfoObj')
    }

    // global state object -----------------------------------------------
    const globalState = {
        bookList,
        currentPage,
        userInfoObj,
        isLoggedIn
    }


    // life cycle hooks ---------------------------------------------------
    useEffect(() => {
        const data = window.localStorage.getItem('userInfoObj')
        const storedLoginBool = window.localStorage.getItem('isLoggedIn')
        if(storedLoginBool && data){
            setuserInfoObj(JSON.parse(data))
            setIsLoggedIn(JSON.parse(storedLoginBool))
            setLocation('DASHBOARD')
        }
    }, [])
    

    return (
        <appContext.Provider
        value={{
            ...globalState,
            getBookList,
            handlePageChange,
            setUserLogin,
            logout
        }}>
            {children}
        </appContext.Provider>
    )
    
}

export default SociallyBookedContextProvider