import React, {useState} from 'react';

function Study ({card}) {
    const [isFront, setIsFront]=useState(true)

    const toggleStudy = () => {    
        setIsFront(isFront => !isFront)
    }

    const {id, title, question, answer, image} = card

    return (
        <div className='container'  >
        <div onClick={toggleStudy} className='card' style={{background: isFront ? '#E7F150':'#1dace6'}}>
        {/* <p>{isFront?question:answer }</p> */}
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

{/* <div className='container'  onClick={toggleStudy}>
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
        </div> */}


export default Study