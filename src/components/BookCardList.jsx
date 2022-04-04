import React, {useState} from 'react'
import Card from './Card'
import { useSocialContext } from '../context/sociallyBookedContext'
import Modal from './Modal'

export default function BookCardList() {
  const {bookList} = useSocialContext()

  const [show, setShow] = useState(false)

  const [bookItem, setBookItem] = useState({})
  console.log('what is bookItem', bookItem)
  
  return (
    <div>
      {
        bookList.length > 0 && bookList.map(book => {
          let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
          return thumbnail !== undefined && <Card onClick={() => {setShow(true);setBookItem(book)}} book={{...book, thumbnail}}/>
        })
      }
      <Modal closeModal={() => setShow(false)} show={show} book={bookItem}/>
    </div>
  )
}
