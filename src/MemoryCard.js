import React, { useState } from 'react';

export default function MemoryCard (props) {
  return (
    <div>
      <img src={props.src} alt={props.name}/>
      {props.name}
    </div>
  )
}