import React from 'react'

 function Search({searchTerm, setSearch}) {

  const handleChange = (e) => {
 
    setSearch(e.target.value);
  }

  return (
    <div className="search_container">
        <span>🔍</span>
        <input
          value={searchTerm} 
          className="inputBox" 
          type="text" 
          id="search" 
          placeholder='Looking for something?' 
          onChange={handleChange} 
        />
        
    </div>
  )
}




export default Search