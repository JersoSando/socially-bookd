import axios from 'axios'
import React, {useState} from 'react'
import { useSocialContext } from '../context/sociallyBookedContext'

const apiKey = process.env.REACT_APP_API_KEY
export default function Search(props) {
    const {getBookList} = useSocialContext()
    const [search, setSearch] = useState('')
    const searchBook = async (event) => {
      if (event.key ==="Enter") {
        await axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key='+apiKey + '&maxResults=20')
        .then(res => { 
         getBookList(res.data.items)
         props.handleDashboardList('BOOKCARDLIST')
        })
        .catch(err => console.log(err))
      }
    }
  return (
    <div className='search-input'>
        <input type='text' placeholder="Find Your Next Book" 
          value={search} 
          onChange={e => setSearch(e.target.value)}
          onKeyPress={searchBook}/>
          <button>Search</button> 
    </div>
  )
}
