import React from 'react';
import { Link, NavLink } from 'react-router-dom' 

function Header () {

    return (
        <header>
            <nav>
                <h1 className='title'>Sticky Study</h1>
                <div className='navigation'>
                    <NavLink className='button' exact to = "/" >
                        Home
                    </NavLink>
                    <NavLink className='button' exact to = "/create_new_cards" >
                        Create Flashcards
                    </NavLink>
                    <NavLink className='button' exact to = "/decks" >
                        My Flashcards
                    </NavLink>
                    <NavLink className='button' exact to = "/decks/:id/study" >
                        Study
                    </NavLink>
                    <NavLink className='button' exact to = "/decks/1" >
                        Favorites
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}



export default Header