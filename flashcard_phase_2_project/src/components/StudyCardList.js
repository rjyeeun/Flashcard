import Study from './Study'
import Search from './Search'

function StudyCardList({ cardList, search, setSearch}) {
    // Create an Array of Decks
    const studyCard = cardList.map(card =>(
        <Study 
            key={card.id}
            card={card}
        />
    ))

    return (
        <div>
            <Search  search = {search} setSearch={setSearch} />
            {studyCard}
        </div>
    );
  }


export default StudyCardList;