import axios from 'axios'
import React, {useState, useEffect} from 'react'
import CreatePost from './CreatePost'
import PostList from './PostList'
import { baseURL } from '../utilities/constants'

export default function PostContainer(props) {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    axios.get(`${baseURL}/posts`).then(res => setPostList(res.data))
  }, [])

const createPost = async (text) => {
    if (!text) {
        return window.alert(`Enter text`)
    }
    console.log('hit create', text)
    const res = await axios.post(`${baseURL}/posts`, {text})
    console.log('what be data', res.data)
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

