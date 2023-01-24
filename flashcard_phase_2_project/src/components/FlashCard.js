import React, {useState} from 'react';

function FlashCard({flashcard}) {
    
    const [isFront, setIsFront]=useState(true)

    const toggleStudy = () => {    
        setIsFront(isFront => !isFront)
    }

    const {id, question, answer} = flashcard

    return (
        <div className='card' style={{background: isFront ? '#26d83e':'#ff69b4'}} onClick={toggleStudy}>
            <p >{isFront?question:answer}</p>
        </div>
    );
  }



export default FlashCard