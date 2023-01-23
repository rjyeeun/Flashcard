import FlashCard from './FlashCard';

function FlashCardSet({title, flashcards}) {

    const flashcard = flashcards.map(flashcard => (
        <FlashCard 
            key={flashcard.id}
            flashcard={flashcard}
        />
    ))

    return (
        <div>
            <h1>{title}</h1>
            {flashcard}
        </div>
    );
  }



export default FlashCardSet