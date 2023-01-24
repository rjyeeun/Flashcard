import React, {useState} from 'react';

function FlashCard({flashcard}) {
    
    const [isFront, setIsFront]=useState(true)

    const toggleStudy = () => {    
        setIsFront(isFront => !isFront)
    }

    const {id, question, answer} = flashcard

    return (
        <div className='card'>
            <h2 onClick={toggleStudy}>{isFront?question:answer}</h2>
            {/* <h2>{answer}</h2> */}
        </div>
    );
  }



export default FlashCard