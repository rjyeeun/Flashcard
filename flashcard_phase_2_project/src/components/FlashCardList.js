import FlashCard from './FlashCard'
import Search from './Search'
import React from 'react'

function FlashCardList({ cardList, searchTerm, changeSearch, onDeleteCard}) {

    // Create an Array of Cards for FlashCard Component
    const flashCard = cardList.map(card =>(
        <FlashCard 
            key={card.id}
            card={card}
            onDeleteCard={onDeleteCard}
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