import axios from 'axios'
import React, {useState} from 'react'
import { useSocialContext } from '../context/sociallyBookedContext'

export default function ReviewModal({closeReviewModal, showReview, book, handleDashboardList}) {
const {userInfoObj} = useSocialContext()
const [reviewText, setReviewText] = useState('')

const submitReview = async () => {
    const reviewObj = {
        reviewTitle: book.volumeInfo.title,
        reviewAuthor: book.volumeInfo.authors,
        review: reviewText,
        user_id: userInfoObj.id
    }

    await axios.post('http://localhost:4000/api/review', reviewObj)
    .then(() => handleDashboardList('REVIEWCONTAINER'))
}
    if(!showReview) {
        return null
    }
    let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div className='overlay'>
        <div className='overlay-inner'>
            <button onClick={closeReviewModal} className='close'>Close</button>
        <div className='inner-box'>
                <img src={thumbnail} alt='' />
                <div className='info'>
                    <h1>{book.volumeInfo.title}</h1>
                    <h3>{book.volumeInfo.authors}</h3>
                </div>
            </div>
        </div>
            <textarea className='description' rows='4' cols='50' value={reviewText}
            onChange={e => setReviewText(e.target.value)}></textarea>
            <button onClick={submitReview}>Submit Review</button>
    </div>
  )
}
