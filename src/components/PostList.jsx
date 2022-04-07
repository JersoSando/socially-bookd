import React from 'react'
import Post from './Posts'

export default function PostList(props) {
  return (
    <div className='post-list-container'>
      {props.postList && props.postList.map((e) => <Post deletePost={props.deletePost} key={e.post_id} post={e}/>)}
    </div>
  )
}
