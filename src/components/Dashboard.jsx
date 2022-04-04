import React, { useState, useContext } from 'react'
import Header from './Header'
import PostContainer from './PostContainer'
import PostList from './PostList'
import BookCardList from './BookCardList'
import ReviewContainer from './ReviewContainer'
// import { SearchContext } from '../context/sociallyBookedContext'

export default function Dashboard() {
  // const {bookList} = useContext(SearchContext)
  const [listType, setListType] = useState('POSTCONTAINER')
 
  let listContainerType = {
    'POSTCONTAINER': <PostContainer handleDashboardList={setListType}/>, 
    'BOOKCARDLIST': <BookCardList handleDashboardList={setListType}/>,
    'REVIEWCONTAINER': <ReviewContainer handleDashboardList={setListType}/>
  }

  // grab what was typed and set the cardlist type array to what was returned from google
  // run logic and set listType to BOOKLISTTYPE
  return (
    <div>
        <Header id="dashboard-header" handleDashboardList={setListType} />
        {listContainerType[listType]}
    </div>
  )
}
