import React from "react"
import { useState } from "react"

const SearchBar = () => {
  const [ query, setQuery ] = useState("")

  return (
    <>
      <div className='navbar-searchbar-wrapper'>
        <form role='search'>
          <div className='navbar-searchbar-input-wrapper'>
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="navbar-searchbar-icon"><path fillRule="evenodd" clipRule="evenodd" d="m19.56 17.44-3.532-3.534A6.46 6.46 0 0 0 17 10.5a6.5 6.5 0 1 0-6.5 6.5 6.46 6.46 0 0 0 3.407-.973l3.533 3.533c.292.293.676.44 1.06.44s.768-.147 1.06-.44a1.496 1.496 0 0 0 0-2.12ZM10.5 15a4.5 4.5 0 1 1 0-9.002 4.5 4.5 0 0 1 0 9.002Z" fill="#222"></path></svg>
            <input
              className="navbar-searchbar-input-text"
              placeholder="What would you like to cook?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search" />
          </div>
        </form>
      </div></>
  )
}

export default SearchBar
