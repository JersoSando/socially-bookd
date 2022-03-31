import axios from 'axios'
import React, {useState} from 'react'
// import { getDate } from '../utilities/helpers'

export default function CreatePost(props) {
    const [text, setText] = useState('')

    const handleText = (e) => {
        setText(e.target.value)
    }

  return (
    <div>
        
        <input placeholder='What are you reading?' value={text} onChange={handleText}/>
        <button onClick={() => props.createPost(text)}>Send Post </button>
    </div>
  )
}
