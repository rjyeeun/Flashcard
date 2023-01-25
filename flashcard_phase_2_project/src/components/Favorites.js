import React from 'react'
import FavoriteCard from './FavoriteCard'
import Search from './Search'

export default function Favorites({ searchTerm, changeSearch, favoriteCards, toggleFavorite }) {
  const card = favoriteCards.map(card => (
    <FavoriteCard
    key={card.id} 
    card={card}
    toggleFavorite={toggleFavorite}
    />
  ))

  console.log(favoriteCards)
  return (
    <div>
        <Search  
            searchTerm = {searchTerm} 
            changeSearch={changeSearch} 
        />
        {card}
    </div>
  )
}
