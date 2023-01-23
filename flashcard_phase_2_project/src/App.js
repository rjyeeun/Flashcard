import React, {useEffect, useState} from 'react';
import Decks from './components/Decks';


function App() {

  const url = 'http://localhost:8001/Decks'
  const [flashCardDecks, setFlashCardDecks] = useState([])

  //Initial Fetch All Flash Card Decks
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setFlashCardDecks(data))
  },[])

  return (
    <>
      <h1>Sticky Study</h1>
      <Decks 
        flashCardDecks={flashCardDecks}
      />
    </>
  );
}

export default App;
