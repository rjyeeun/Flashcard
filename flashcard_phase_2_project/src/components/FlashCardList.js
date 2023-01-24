import FlashCard from './FlashCard'
import Search from './Search'

function FlashCardList({ cardList, search, setSearch}) {
    // Create an Array of Decks
    const flashCard = cardList.map(card =>(
        <FlashCard 
            key={card.id}
            card={card}
        />
    ))

    return (
        <div>
            <Search  search = {search} setSearch={setSearch} />
            {flashCard}
        </div>
    );
  }


export default FlashCardList;