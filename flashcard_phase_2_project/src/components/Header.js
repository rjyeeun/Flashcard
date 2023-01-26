import React from 'react';
import { Link } from 'react-router-dom' 
import {RxReset} from 'react-icons/rx'



function Header ({setCardList}) {

    const handleReset = () => {
        fetch("http://localhost:8001/card")
        .then(response => response.json())
        .then(data => setCardList(data))
    }

    return (
        <div>
            <button onClick={handleReset}>Reset <RxReset/></button>
            <Link to = "/" className="title">Sticky Study</Link>
            <div className="flex_Container">  
                <Link to = "/cards" className="myFlashcard" >My Flashcards</Link>
                <Link to = "/cards/study" className="study" >Study</Link>
                <Link to = "/cards/favorites" className="favorites">Favorites</Link>
                <Link to = "/create_new_cards" className="createNew">Create Flashcards</Link>
            </div>
        </div>
    )
}



export default Header