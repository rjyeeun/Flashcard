import React from 'react'
import postit from './postit.png'
import {SlNote} from 'react-icons/sl'
import { Link } from 'react-router-dom' 


export default function Home() {

  return (
   <div className="home_container">
      <img className="home_img" src={postit}/>
      <p class="first-txt">
      Welcome to Sticky Study ☺
      </p>
      <p class="second-txt">
      Make Your Own Flashcard Here
      </p>
      <Link to= "/create_new_cards" class="third-txt"> <SlNote/></Link>
   </div>
  )
}
