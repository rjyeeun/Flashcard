import React, {useState} from 'react';


export default function EditCardForm({setCardList, editCard}) {

    const {title, question, answer, image, favorite, id} = editCard

    const [formData, setFormData]=useState(editCard)
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    // Edit Targeted Card, Post Changes To Server, Fetch Updated cardList
    const handleSubmit = (e) => {
      e.preventDefault()
      fetch(`http://localhost:8001/card/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(() => {
  
        //Fetch the Updated Card List From Server and Update the State of cardList With Most Recent Changes
        fetch("http://localhost:8001/card")
        .then(response => response.json())
        .then(data => setCardList(data))
      })
      .catch(error => (alert(error)))
    }
        
    return (
      <div className="form-style-6">
      <h1>Edit Flashcard</h1> 
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            name="title" 
            placeholder="Title" 
            value={formData.title} 
            onChange={handleChange}
          />
          <input 
            type='text' 
            name="question" 
            placeholder="Question" 
            value={formData.question}
            onChange={handleChange}
          />
          <input 
            type='text' 
            name="answer" 
            placeholder="Answer" 
            value={formData.answer}
            onChange={handleChange}
          />
          <input 
            type='text' 
            name="image" 
            placeholder="Image url" 
            value={formData.image}
            onChange={handleChange}
          />
          <input type='submit' value="Edit"/>
        </form>
      </div>
    )
  }

