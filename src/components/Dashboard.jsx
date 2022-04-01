import React, { useState, useContext } from 'react'
import Header from './Header'
import PostContainer from './PostContainer'
import PostList from './PostList'
import BookCardList from './BookCardList'
import { SearchContext } from '../context/SearchContext'

export default function Dashboard(props) {
  const {bookList} = useContext(SearchContext)
  const [listType, setListType] = useState('POSTCONTAINER')
  const handleDashboardList = (nextList) => {
    setListType(nextList)
  }
  let listContainerType = {
    'POSTCONTAINER': <PostContainer handleDashboardList={handleDashboardList}/>, 
    'BOOKCARDLIST': <BookCardList handleDashboardList={handleDashboardList}/>
  }

  // grab what was typed and set the cardlist type array to what was returned from google
  // run logic and set listType to BOOKLISTTYPE
  return (
    <div>
        <Header  user={props.user} />
        {listContainerType[listType]}
    </div>
  )
}
