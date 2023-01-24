import React from 'react';
import { Link } from 'react-router-dom' 
import Home from './Home'

function Header () {

    return (

            <div>
                <Link to = "/" className="title">Sticky Study</Link>
                <Link to = "/create_new_cards" className="createNew">Create Flashcards</Link>
                <Link to = "/decks" className="myFlashcard" >My Flashcards</Link>
                <Link to = "/decks/:id/study" className="study" >Study</Link>
                <Link to = "/decks/1" className="favorites">Favorites</Link>
            </div>
    )
}



export default Header