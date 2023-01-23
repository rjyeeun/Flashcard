import React from 'react';
import { Link } from 'react-router-dom' 

function Header () {

    return (
        <div className="title">
            <h1>Sticky Study</h1>
            <div>
                <Link to = "/" >Home</Link>
                <Link to = "/create_new_cards" >Create Flashcards</Link>
                <Link to = "/decks" >My Flashcards</Link>
                <Link to = "/decks/:id/study" >Study</Link>
                <Link to = "/decks/1" >Favorites</Link>
            </div>
        </div>
    )
}



export default Header