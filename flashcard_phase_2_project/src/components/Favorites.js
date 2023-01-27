import React from 'react'
import FavoriteCard from './FavoriteCard'

export default function Favorites({ favoriteCards, toggleFavorite, onDeleteCard }) {
  const card = favoriteCards.map(card => (
    <FavoriteCard
    key={card.id} 
    card={card}
    toggleFavorite={toggleFavorite}
    onDeleteCard={onDeleteCard}
    />
  ))

  return (
    <div>
        {card}
    </div>
  )
}
