import FlashCard from './FlashCard'
import Search from './Search'

function FlashCardList({ cardList, searchTerm, setSearch}) {
    // Create an Array of Decks
    const flashCard = cardList.map(card =>(
        <FlashCard 
            key={card.id}
            card={card}
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