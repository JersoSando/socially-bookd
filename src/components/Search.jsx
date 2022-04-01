import axios from 'axios'
import React, {useState, useContext} from 'react'
import Card from './Card'
import { SearchContext } from '../context/SearchContext'

const apiKey = process.env.REACT_APP_API_KEY
// console.log('What is api key', apiKey)
export default function Search() {
    const {getBookList} = useContext(SearchContext)
    const [search, setSearch] = useState('')
    const [bookData, setBookData] = useState([])
    const searchBook = (event) => {
      if (event.key ==="Enter") {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key='+apiKey + '&maxResults=40')
        .then(res => getBookList(res.data.items))
        .catch(err => console.log(err))
      }
    }
  return (
    <div>
        <input type='text' placeholder="Find Your Next Book" 
          value={search} 
          onChange={e => setSearch(e.target.value)}
          onKeyPress={searchBook}/>
          <button>Search</button> 
          <div>
              <Card book={bookData}/>
          </div>
    </div>
  )
}
