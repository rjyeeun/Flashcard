import FlashCardSet from './FlashCardSet';

function FlashCardGroups({flashcards}) {
    
    const flashcardSet = flashcards.map(flashcardSet =>(

        <FlashCardSet 
            key={flashcardSet.id}
            flashcardSet={flashcardSet}
        />
    ))

    return (
        <div>
            {flashcardSet}
        </div>
    );
  }


export default FlashCardGroups