import React, {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import FlashCardList from './components/FlashCardList';
import Header from './components/Header';
import FlashCardForm from './components/FlashCardForm';
import StudyCardList from './components/StudyCardList.js';
import Favorites from './components/Favorites';

function App() {

  const url = 'http://localhost:8001/decks'
  const [cardList, setCardList] = useState([])
  const [searchTerm, setSearch] = useState("")

  //Initial Fetch All Flash Card Decks
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCardList(data))
  },[])

  //add cards after submitting form
  const addCards = (newCard) => {
    const updatedCards = [...cardList, newCard];
    setCardList(updatedCards)
  }

  //filtering search function
  const filteredCards = cardList.filter(card => (
    card.question.toLowerCase().includes(searchTerm.toLowerCase()) || card.title.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  return (
    <div>
      
      <Header />

      <Switch>

        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/create_new_cards'>
          <FlashCardForm addCards = {addCards}/>
        </Route>

        <Route path='/cards/study'>
          <StudyCardList 
              cardList={filteredCards}
              searchTerm={searchTerm}
              setSearch={setSearch}
          />
        </Route>
        
        <Route path='/cards/1'>
          <Favorites />
        </Route>

        <Route path='/cards'>
          <FlashCardList 
            cardList={filteredCards}
            searchTerm={searchTerm}
            setSearch={setSearch}
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
