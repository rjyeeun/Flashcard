import {useState} from 'react'

function FlashCardForm({addCards}) {
    const [title, setTitle] = useState ("")
    const [question, setQuestion] = useState ("")
    const [answer, setAnswer] = useState ("")
    const [image, setImage] = useState ("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:8001/decks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            question: question,
            answer: answer,
            image: image
          }),
        })
        .then(response => response.json())
        .then((newCard) => addCards(newCard))
       }
      
    const handleAddClick = (e) => {
        
    }
    return (
        <div>
            <h1>Create a Flashcard</h1> 
            <form onSubmit={handleSubmit}>
                <input type='text' name="title" placeholder="Title" value={title} 
                onChange={(e) => setTitle(e.target.value)}/>
                <input type='text' name="question" placeholder="Question" value={question}
                onChange={(e) => setQuestion(e.target.value)}/>
                <input type='text' name="answer" placeholder="Answer" value={answer}
                onChange={(e) => setAnswer(e.target.value)}/>
                <input type='text' name="image" placeholder="image url" value={image}
                onChange={(e)=> setImage(e.target.value)}/>
                <button type='submit'> Create </button>
            </form>
        </div>
    )
}


export default FlashCardForm