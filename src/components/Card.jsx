import React from 'react'

export default function Card({book}) {
  return (
    <>
    {
        book.map((item) => {
            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            if (thumbnail != undefined){
                return (
                    <div className='card'>
                         <img src={thumbnail} alt=''/>
                        <div className='bottom'>
                        <h3 className='title'>{item.volumeInfo.title}</h3>
                        <p className='bookshelves'></p>
                        </div>
                    </div>
                )
            }
        })
    }
    </>  
  )
}
