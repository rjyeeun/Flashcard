import React, {useState} from 'react';
import {MdFavorite} from 'react-icons/md'
import {MdFavoriteBorder} from 'react-icons/md'

function FavoriteCard ({card, toggleFavorite}) {

    const [isFront, setIsFront]=useState(true)

    const {id, title, question, answer, image, favorite} = card

    
    //Used to Toggle Question and Answer & Card CSS
    const toggleStudy = () => {    
        setIsFront(isFront => !isFront)
    }

    ////Used to toggle favorite (true or false)
    const handleToggleFavorite = (id, favorite) => {
  

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
        <div className='container'>
            <div onClick={toggleStudy} className='card' style={{background: isFront ? '#E7F150':'#1dace6'}}>
                <h1 className='favorite_btn'
                    type="text"
                    value={favorite}
                    onClick={(e) => {
                        e.stopPropagation()
                        handleToggleFavorite(id, e.target.value)}}
                >{card.favorite?  <MdFavorite/> : <MdFavoriteBorder/>}</h1>
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

export default FavoriteCard