import Study from './Study'
import Search from './Search'
import React from 'react'

function StudyCardList({ cardList, searchTerm, changeSearch, onDeleteCard, toggleFavorite }) {
    
    // Create an Array of Cards for Study Component
    const studyCard = cardList.map(card =>(
        <Study
            key={card.id} 
            card={card}
            onDeleteCard={onDeleteCard}
            toggleFavorite={toggleFavorite}
        />
    ))

    return (
        <div>
            <Search  
                searchTerm = {searchTerm} 
                changeSearch={changeSearch} 
            />
            {studyCard}
        </div>
    );
  }


export default StudyCardList;