import React from 'react'
import postit from './postit.png'



export default function Home() {
  return (
   <div className="home_container">
      <h2 class="first-txt">
        Welcome to Sticky Study! 
      </h2>
      <h2 class="second-txt">
        Make Your Own Flashcard and Study!
      </h2>
      <img className="home_img" src={postit}/>
      
   </div>
  )
}
