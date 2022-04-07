import React, { useState, useContext } from 'react'
import Header from './Header'
import PostContainer from './PostContainer'
import BookCardList from './BookCardList'
import ReviewContainer from './ReviewContainer'

export default function Dashboard() {
  const [listType, setListType] = useState('POSTCONTAINER')
 
  let listContainerType = {
    'POSTCONTAINER': <PostContainer handleDashboardList={setListType}/>, 
    'BOOKCARDLIST': <BookCardList handleDashboardList={setListType}/>,
    'REVIEWCONTAINER': <ReviewContainer handleDashboardList={setListType}/>
  }

  return (
    <div>
        <Header id="dashboard-header" handleDashboardList={setListType} />
        {listContainerType[listType]}
    </div>
  )
}
