import React, {useState} from 'react';
import {MdDoneOutline} from 'react-icons/md'

function Study ({card, onDeleteCard}) {

    const [isFront, setIsFront]=useState(true)

    const {id, title, question, answer, image} = card

    //Used to Toggle Question and Answer & Card CSS
    const toggleStudy = () => {    
        setIsFront(isFront => !isFront)
    }

    //Delete Card From DOM Only
    const handleDeleteStudyCard = () => {
        onDeleteCard(id)
    }

    return (
        <div className='container'>
            <div onClick={toggleStudy} className='card' style={{background: isFront ? '#E7F150':'#1dace6'}}>
                <h1 className='delete' onClick={handleDeleteStudyCard}><MdDoneOutline/></h1>
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



export default Study