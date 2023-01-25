import FlashCard from './FlashCard'
import Search from './Search'

function FlashCardList({ cardList, searchTerm, setSearch, onDeleteCard}) {
    // Create an Array of Decks
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
                setSearch={setSearch} 
            />
            {flashCard}
        </div>
    );
  }


export default FlashCardList;