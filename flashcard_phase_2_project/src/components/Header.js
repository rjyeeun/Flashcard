import React from 'react';
import { Link, NavLink } from 'react-router-dom' 
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
                <NavLink to = "/cards" className="myFlashcard" >My Flashcards</NavLink>
                <NavLink to = "/cards/study" className="study" >Study</NavLink>
                <NavLink to = "/cards/favorites" className="favorites">Favorites</NavLink>
                <NavLink to = "/create_new_cards" className="createNew">Create Flashcards</NavLink>
            </div>
        </div>
    )
}



export default Header