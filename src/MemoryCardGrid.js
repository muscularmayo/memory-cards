import React, { useState } from 'react';
import MemoryCard from './MemoryCard.js'
import michael from './images/michael_scott.jpeg'
import './memorycard.css';

export default function MemoryCardGrid (props) {

  function shuffle (array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
  return (
    <div className="memory-card-grid">
      <MemoryCard src={michael}name="Michael Scott" />
    </div>
  )
}



