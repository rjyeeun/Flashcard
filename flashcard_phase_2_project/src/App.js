import React, {useEffect, useState} from 'react';
import Decks from './components/Decks';
import Header from './components/Header';
import FlashCardForm from './components/FlashCardForm';
import {Switch, Route} from 'react-router-dom'
import Study from './components/Study';
import Favorites from './components/Favorites'
import Home from './components/Home'

function App() {

  const url = 'http://localhost:8001/decks'
  const [flashCardDecks, setFlashCardDecks] = useState([])

  //Initial Fetch All Flash Card Decks
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setFlashCardDecks(data))
  },[])

  return (
    <div>
      <Header />
      
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        
        <Route path='/create_new_cards'>
          <FlashCardForm />
        </Route>
        <Route path='/decks/:id/study'>
          <Study />
        </Route>
        <Route path='/decks'>
          <Decks 
            flashCardDecks={flashCardDecks}
          />
        </Route>
        <Route path='/decks/1'>
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
