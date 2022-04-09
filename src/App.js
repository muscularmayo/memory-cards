import logo from './logo.svg';
import './App.css';
import MemoryCard from './MemoryCard.js';
import React, { useState } from 'react';
import michael from './images/michael_scott.jpeg'
import Score from './Score.js'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(3)
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
      <h1>
        The Office - Memory Game
      </h1>
      <Score bestScore={bestScore} currentScore={score}/>
      <MemoryCard src={michael}name="Michael Scott" />
    </div>
  );
}

export default App;
