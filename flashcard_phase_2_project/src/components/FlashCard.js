function FlashCard({flashcard}) {
    

    const {id, question, answer} = flashcard

    return (
        <div>
            <h2>{question}</h2>
            <h2>{answer}</h2>
        </div>
    );
  }



export default FlashCard