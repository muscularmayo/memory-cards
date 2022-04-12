import React, { useState } from 'react';
import BestScore from './BestScore.js';
import CurrentScore from './CurrentScore.js'

export default function Score (props) {
  return (
    <div className="score-card">
      <BestScore bestScore={props.bestScore}/>
      <CurrentScore currentScore={props.currentScore}/>
    </div>
  )
}