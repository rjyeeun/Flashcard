import React, {useState} from 'react';
import {MdFavorite} from 'react-icons/md'
import {MdFavoriteBorder} from 'react-icons/md'
import {TiThumbsOk} from 'react-icons/ti'


function FavoriteCard ({card, toggleFavorite, onDeleteCard}) {

    const [isFront, setIsFront]=useState(true)

    const {id, title, question, answer, image, favorite} = card

    
    //Used to Toggle Question and Answer & Card CSS
    const toggleStudy = () => {    
        setIsFront(isFront => !isFront)
    }

    //Delete Card From DOM Only
    const handleDeleteStudyCard = () => {
        onDeleteCard(id)
    }

    //Used to Toggle Favorite (true or false) & PATCH to DB
    const handleToggleFavorite = (id) => {
        fetch(`http://localhost:8001/card/${id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                favorite: !card.favorite
            }),
        })
        .then(response => response.json())
        .then(() => {
            toggleFavorite(id)
        })
        .catch(error => (console.error(error)))
    }
        
    return (
        <div>
            <div onClick={toggleStudy} className='card' style={{background: isFront ? '#E7F150':'#1dace6'}}>
                <div className="btn_container">
                    <figure className='favorite_btn'
                        type="text"
                        value={favorite}
                        onClick={(e) => {
                            e.stopPropagation()
                            handleToggleFavorite(id, e.target.value)}}
                    >{card.favorite?  <MdFavorite/> : <MdFavoriteBorder/>}
                    </figure>
                </div>
                {isFront? (
                    <>
                        <h2 className="front">{title}</h2>
                        <p className="question"> {question}</p>
                    </>
                    ) : (
                    <h2 className="answer">{answer}
                        <div><img className="image" src={image}/></div>
                    </h2>
                    )}
                <div className="btn_container">
                    <figure className='study_delete' onClick={handleDeleteStudyCard}><TiThumbsOk/></figure>
                </div>        
            </div>
        </div>
    );
  }


export default FavoriteCard