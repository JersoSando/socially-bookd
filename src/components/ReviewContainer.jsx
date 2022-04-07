import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { baseURL } from '../utilities/constants'
import { useSocialContext } from '../context/sociallyBookedContext'

export default function ReviewContainer() {
    const {userInfoObj} = useSocialContext()
    const [reviewList, setReviewList] = useState([])
    useEffect(() => {
        axios.get(`${baseURL}/review/${userInfoObj.id}`).then(res => setReviewList(res.data))
    }, [])

  return (
    <div className=''>
        {
            reviewList.length > 0 && reviewList.map((review, index) => {
                return (
                <div className='review-box'  key={index}>
                    <h3>{review.review_title}</h3>
                    <h3>{review.review_author}</h3>
                    <h4>{review.review_text}</h4>
                </div>
                )
            })      
        }
    </div>
  )
}
