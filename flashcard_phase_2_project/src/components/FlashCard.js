import React, {useState} from 'react';

function FlashCard({flashcard}) {
    
    const [isFront, setIsFront]=useState(true)

    const toggleStudy = () => {    
        setIsFront(isFront => !isFront)
    }

    const {id, question, answer} = flashcard

    return (
        <div className='container'  onClick={toggleStudy}>
            <div className='card'>
                {isFront? (
                <h2 className="front">{question}</h2>
                ) : (
                <h2 className="back">{answer}</h2> )}
            </div>
        </div>
    );
  }



export default FlashCard