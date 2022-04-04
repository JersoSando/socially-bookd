import React, {useState} from 'react'
import Card from './Card'
import { useSocialContext } from '../context/sociallyBookedContext'
import Modal from './Modal'
import ReviewModal from './ReviewModal'

export default function BookCardList({handleDashboardList}) {
  const {bookList} = useSocialContext()

  const [show, setShow] = useState(false)
  const [bookItem, setBookItem] = useState({})
  const [showReview, setShowReview] = useState(false)
  console.log('what is bookItem', bookItem)
  
  return (
    <div>
      {
        bookList.length > 0 && bookList.map((book, index) => {
          let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
          return thumbnail !== undefined && <Card key={index} showReviewModal={() => {setShowReview(true); setBookItem(book)}} onClick={() => {setShow(true);setBookItem(book)}} book={{...book, thumbnail}}/>
        })
      }
      <Modal closeModal={() => setShow(false)} show={show} book={bookItem}/>

      <ReviewModal handleDashboardList={handleDashboardList} closeReviewModal={() => setShowReview(false)} showReview={showReview} book={bookItem}/>
    </div>
  )
}
