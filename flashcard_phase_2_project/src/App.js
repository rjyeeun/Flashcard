import React, {useEffect, useState} from 'react';
// import Header from './Header';
// import Search from './Search';
// import Study from './Study';
// import FlashCardForm from './FlashCardForm';
import FlashCardGroups from './components/FlashCardGroups';


function App() {

  const url = 'http://localhost:8001/flashcardGroups'
  const [flashcards, setFlashCards] = useState([])

  //Initial Fetch
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setFlashCards(data))
  },[])
  
  console.log(flashcards)

  return (
      // <h1>Group 6</h1>
      <FlashCardGroups 
        flashcards={flashcards}
      />
  );
}

export default App;
