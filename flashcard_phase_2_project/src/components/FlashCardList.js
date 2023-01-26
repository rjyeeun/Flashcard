import FlashCard from './FlashCard'
import Search from './Search'
import React from 'react'


function FlashCardList({ cardList, searchTerm, changeSearch, onDeleteCard, toggleFavorite, setEditCard, handleEditClick}) {

    // Create an Array of Cards for FlashCard Component
    const flashCard = cardList.map(card =>(
        <FlashCard 
            key={card.id}
            card={card}
            onDeleteCard={onDeleteCard}
            setEditCard={setEditCard}
            toggleFavorite={toggleFavorite}
            handleEditClick={handleEditClick}
        />
  
        
    ))

    return (
        <div>
            <Search  
                searchTerm = {searchTerm} 
                changeSearch={changeSearch} 
            />
            {flashCard}
        </div>
    );
  }


export default FlashCardList;