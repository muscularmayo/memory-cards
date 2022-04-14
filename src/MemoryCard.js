import React, { useState } from 'react';
import './memorycard.css';

export default function MemoryCard (props) {

  const cardClick = (e) => {
    console.log(e, props.name)
    props.memoryCardClick(props.name)
  }

  return (
    <div onClick={cardClick} className="memory-card">
      <img src={props.src} alt={props.name}/>
      {props.name}
    </div>
  )
}