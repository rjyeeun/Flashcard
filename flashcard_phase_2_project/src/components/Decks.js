import FlashCardSet from './FlashCardSet';

function Decks({flashCardDecks}) {
    // Create an Array of Decks
    const deck = flashCardDecks.map(deck =>(
        <FlashCardSet 
            key={deck.id}
            title = {deck.title}
            flashcards = {deck.flashcards}
        />
    ))

    return (
        <div>
            {deck}
        </div>
    );
  }


export default Decks