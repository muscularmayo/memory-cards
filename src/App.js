import logo from './logo.svg';
import './App.css';
import MemoryCard from './MemoryCard.js';
import React, { useState } from 'react';

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [chosenCards, setChosenCards] = useState([])

  const memoryCardClick = (card) => {
    //when the user clicks on a image card we have to choose 1 of 2 options
    //if card is not already in chosenCards array, make a copy of chosenCards, push new card into array, change chosenCards
    //also increment the score up and determineBestScore()
    //else if card is in chosenCards array
    //setScore(0) and setChosenCards([])
  }

  const determineBestScore = () => {
    //if score is greater than bestScore, change bestScore to score (?)
  }

  return (
    <div className="App">
      Memory Cards (:
    </div>
  );
}

export default App;
