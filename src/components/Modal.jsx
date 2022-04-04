
import React from 'react'

export default function Modal({show, book, closeModal}) {
    if(!show) {
        return null
    }
    console.log('what is book', book)
    // there should be a button with the x icon to close out of the modal
    let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;


  return (
    <div className='overlay'>
        <div className='overlay-inner'>
            <button onClick={closeModal}className='close'>Close</button>
            <div className='inner-box'>
                <img src={thumbnail} alt='' />
                <div className='info'>
                    <h1>{book.volumeInfo.title}</h1>
                    <h3>{book.volumeInfo.authors}</h3>
                    <h4>{book.volumeInfo.publisher}</h4><span>{book.volumeInfo.publishedDate}</span>
                </div>
            </div>
                <h4 className='description'>{book.volumeInfo.description}</h4>
            </div>
        </div>
  )
}
