import React from 'react'

 function Search({search, setSearch}) {
  return (
    <div className="search_container">
        <span>Search </span>
        <input className="inputBox" type="text" id="search" placeholder={search} onChange={(e) => setSearch(e.target.value)} />
        
    </div>
  )
}




export default Search