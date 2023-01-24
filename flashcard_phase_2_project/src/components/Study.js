import React, {useState} from 'react';

function Study ({card}) {
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
                 <div> {question}</div>
                  </h2>
                ) : (
                <h2 className="back">{answer}<img src={image}/></h2> 
                )}
            </div>
        </div>
    );
  }


export default Study