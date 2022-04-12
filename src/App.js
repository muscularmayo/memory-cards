import logo from './logo.svg';
import './App.css';
import MemoryCardGrid from './MemoryCardGrid.js';
import React, { useState } from 'react';
import michael from './images/michael_scott.jpeg'
import Header from './Header.js'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(1)
  const [chosenCards, setChosenCards] = useState([])
  const [cardDisplayOrder, setCardDisplayOrder] = useState([])
  /*
  state is {
    score: currentScore,
    bestScore: bestScore,
    chosenCards: array of cards that are on this current run of memory
  }

  score cannot be > bestScore
  chosenCards array length should be currentScore

  when i click a card
  1. check if that card is in chosenCards list
  2. if not, add to chosenCards, set score to length, determine if bestScore needs to be updated
  3. if yes, reset chosenCards, set score to 0, leave bestScore as is




  */
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
      <Header bestScore={bestScore} currentScore={score}/>
      <MemoryCardGrid />
    </div>
  );
}

export default App;
