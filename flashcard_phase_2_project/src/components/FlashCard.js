import React, {useState} from 'react';

function FlashCard({card}) {
    
    const [isFront, setIsFront]=useState(true)

    const toggleStudy = () => {    
        setIsFront(isFront => !isFront)
    }

    const {id, title, question, answer, image} = card

    return (
        <div className='container'  onClick={toggleStudy}>
            <div className='card'>
                {isFront? (
                <h2 className="front">{title}
                    <div className="question"> {question}</div>
                </h2>
                ) : (
                <h2 className="back">{answer}
                    <div><img className="image" src={image}/></div>
                </h2> 
                )}
            </div>
        </div>
    );
  }



export default FlashCard