import axios from 'axios'
import React, {useState, useEffect} from 'react'
import CreatePost from './CreatePost'
import PostList from './PostList'

export default function Post(props) {
 
  return (
    <div className='review-box'>
        <h3>{props.post.post_text}</h3>
        <div className='post-btn'>
        <button onClick={() => props.deletePost(props.post.post_id)}>Delete</button>
        </div>
    </div>
  )
}
