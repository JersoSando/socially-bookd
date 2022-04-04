import axios from 'axios'
import React, {useState, useEffect, useContext } from 'react'
import CreatePost from './CreatePost'
import PostList from './PostList'
import { baseURL } from '../utilities/constants'
import { useSocialContext } from '../context/sociallyBookedContext'

export default function PostContainer() {
  const [postList, setPostList] = useState([])
  const {userMessage} = useSocialContext()
  useEffect(() => {
    axios.get(`${baseURL}/posts/${userMessage.id}`).then(res => setPostList(res.data))
  }, [])

const createPost = async (text) => {
    if (!text) {
        return window.alert(`Enter text`)
    }
    const res = await axios.post(`${baseURL}/posts`, {text, id: userMessage.id})
    setPostList(res.data)
  
}

const deletePost = async (id) => {
    console.log('what is id', typeof id)
    const res = await axios.delete(`${baseURL}/posts/${id}`)
    setPostList(res.data)
  }

  return (
    <div>
        <CreatePost createPost={createPost}/>
        {postList.length > 0 && <PostList deletePost={deletePost} postList={postList}/>}
    </div>
  )
}

