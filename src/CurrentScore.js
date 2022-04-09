import React, { useState } from 'react';
import './memorycard.css';

export default function CurrentScore (props) {
  return (
    <div className="current-score">
      Current Score: {props.currentScore}
    </div>
  )
}