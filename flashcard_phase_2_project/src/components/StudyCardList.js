import Study from './Study'
import Search from './Search'

function StudyCardList({ cardList, searchTerm, setSearch, onDeleteCard}) {
    
    // Create an Array of Cards for Study Component
    const studyCard = cardList.map(card =>(
        <Study 
            key={card.id}
            card={card}
            onDeleteCard={onDeleteCard}
        />
    ))

    return (
        <div>
            <Search  searchTerm = {searchTerm} setSearch={setSearch} />
            {studyCard}
        </div>
    );
  }


export default StudyCardList;