import React from 'react'

 function Search({search, setSearch}) {
  return (
    <div>
        <label htmlFor="search">Search Card:</label>
        <input type="text" id="search" placeholder={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}




export default Search