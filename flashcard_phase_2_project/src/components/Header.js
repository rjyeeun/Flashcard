import React from 'react';
import { Link } from 'react-router-dom' 
import Search from './Search'

function Header () {

    return (

            <div>
                <Link to = "/" className="title">Sticky Study</Link>
                <div className="flex_Container">  
                    <Link to = "/cards" className="myFlashcard" >My Flashcards</Link>
                    <Link to = "/cards/study" className="study" >Study</Link>
                    <Link to = "/cards/1" className="favorites">Favorites</Link>
                    <Link to = "/create_new_cards" className="createNew">Create Flashcards</Link>
                </div>
            </div>
    )
}



export default Header