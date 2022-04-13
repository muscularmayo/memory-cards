import React, { useState } from 'react';
import './memorycard.css';

export default function MemoryCard (props) {

  const cardClick = (name) => {

  }

  return (
    <div className="memory-card">
      <img src={props.src} alt={props.name}/>
      {props.name}
    </div>
  )
}