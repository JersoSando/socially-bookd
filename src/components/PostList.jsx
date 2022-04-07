import React from 'react'
import Post from './Posts'

export default function PostList(props) {
  console.log('inside of post lists', props)
  return (
    //   holds the posts
    // axios.get 
    <div className='post-list-container'>
      {props.postList && props.postList.map((e) => <Post deletePost={props.deletePost} key={e.post_id} post={e}/>)}
    </div>
  )
}
