import {useState} from 'react'

function FlashCardForm({addCards}) {

  const initialFormData = {
    title: '',
    question: '',
    answer: '',
    image: ''
  }

  const [formData, setFormData]=useState(initialFormData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Add New Card to the Server + Reset formData After Successful Submission
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:8001/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(() => 
      addCards(formData),
      setFormData(initialFormData)
    )
  }
      
  return (
    <div className="form-style-6">
    <h1>Create a Flashcard</h1> 
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
        <input type='submit' value="Create"/>
      </form>
    </div>
  )
}


export default FlashCardForm