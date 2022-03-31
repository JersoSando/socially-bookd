import axios from 'axios'
import React, {useState, useEffect} from 'react'
import CreatePost from './CreatePost'
import PostList from './PostList'

export default function Post(props) {
 
  return (
    <div className='individual-post'>
        {props.post.post_text}
        <button onClick={() => props.deletePost(props.post.post_id)}>Delete</button>
    </div>
  )
}
