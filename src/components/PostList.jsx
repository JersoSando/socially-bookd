import React from 'react'
import Post from './Posts'

export default function PostList(props) {
  console.log('inside of post lists', props)
  return (
    //   holds the posts
    // axios.get 
    <div>
      {props.postList.map((e) => <Post deletePost={props.deletePost} key={e.post_id} post={e}/>)}
    </div>
  )
}
