import React from 'react'

export default function Card({book: {thumbnail, volumeInfo}, onClick, showReviewModal}) {
  return (     
    <div className='card'>
            <img onClick={onClick} src={thumbnail} alt=''/>
        <div className='bottom'>
        <h3 className='title'>Title:{volumeInfo.title}</h3>
        <h3 className='author'>Author:{volumeInfo.authors}</h3>
        </div>
        <button onClick={showReviewModal}>Write a Review</button>
    </div>
    )
}
