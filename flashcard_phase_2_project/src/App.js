import React, {useEffect, useState} from 'react';
import {Switch, Route, useParams} from 'react-router-dom'

import Home from './components/Home'
import FlashCardList from './components/FlashCardList';
import Header from './components/Header';
import FlashCardForm from './components/FlashCardForm';
import StudyCardList from './components/StudyCardList.js';
import Favorites from './components/Favorites';
import EditCardForm from './components/EditCardForm';


function App() {

  //States
  const [cardList, setCardList] = useState([])
  const [searchTerm, setSearch] = useState("")
  const [editCard, setEditCard] = useState(null)

  const url = 'http://localhost:8001/card'

  const favoriteCards = cardList.filter((favoriteCard) => favoriteCard.favorite === true)

  const changeSearch = (value) => {
    setSearch(value)
  }

  //Initial Fetch All Flash Card Decks
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCardList(data))
  },[])

  //Add a New Card to the List of Cards
  const addCards = (newCard) => {
    const updatedCards = [...cardList, newCard];
    setCardList(updatedCards)
  }

  //Display Cards via Search: Question or Title
  const filteredCards = cardList.filter(card => (
    card.question.toLowerCase().includes(searchTerm.toLowerCase()) || card.title.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  //Update Card List after Deleting a Card
  const onDeleteCard = (id) => {
    const updatedCardsList = cardList.filter( (card) => card.id !== id )
    setCardList(updatedCardsList)
  }

  //Toggle Favorite
  const toggleFavorite = (id) => {
    const updatedCards = cardList.map(card => {
      if (card.id === id) {
          return {
              ...card,
              favorite: !card.favorite
          }
      } else {
         return card 
      }
    })
    setCardList(updatedCards)
  }

  //Grabs Card Data From FlashCard Component => Sends it to EditCardForm
  const handleEditClick = (card) => {
    setEditCard(card)
  }

  return (
    <div>
      <Header 
        setCardList={setCardList}
      />

      <Switch>

        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/create_new_cards'>
          <FlashCardForm 
            addCards={addCards}
            setCardList={setCardList}
          />
        </Route>

        <Route path='/cards/study'>
          <StudyCardList
            toggleFavorite={toggleFavorite} 
            cardList={filteredCards}
            searchTerm={searchTerm}
            changeSearch={changeSearch}
            onDeleteCard={onDeleteCard}
          />
        </Route>

        <Route path='/cards/favorites'>
          <Favorites 
            favoriteCards={favoriteCards}
            searchTerm={searchTerm}
            changeSearch={changeSearch}
            toggleFavorite={toggleFavorite}
            onDeleteCard={onDeleteCard}
          />
        </Route>

        <Route path='/cards/:id/edit'>
          <EditCardForm
            setCardList={setCardList}
            editCard={editCard}
          />
        </Route>

        <Route path='/cards'>
          <FlashCardList             
            cardList={filteredCards}
            searchTerm={searchTerm}
            changeSearch={changeSearch}
            onDeleteCard={onDeleteCard}
            toggleFavorite={toggleFavorite}
            handleEditClick={handleEditClick}
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
