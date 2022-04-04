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
    <div>
        {
            reviewList.length > 0 && reviewList.map(review => {})
            
        }
    </div>
  )
}