import React, { useState } from 'react';
import MemoryCard from './MemoryCard.js'


import './memorycard.css';

export default function MemoryCardGrid (props) {
  // [andy, angela, cathy, charles, clark, creed, darryl, david, deangelo, dwight, erin, gabe, hank, holly, jan, jim, jo, karen,
  //  kelly, kevin, meredith, nate, nellie, oscar, pam, pete, phyllis, robert, roy, ryan, stanley, toby, todd]

  const display = props.cardDisplay.map((obj, index) => {
    return (
    <MemoryCard src={obj.image} name={obj.name} key={index} memoryCardClick={props.memoryCardClick}/>
  )})

  return (
    <div className="memory-card-grid">
      {/* <MemoryCard src={michael} name="Michael" />
      <MemoryCard src={andy} name="Andy Bernard" />
      <MemoryCard src={angela} name="Angela Martin" />
      <MemoryCard src={cathy} name="Cathy Simms" />
      <MemoryCard src={charles} name="Charles Miner" />
      <MemoryCard src={clark} name="Clark Green" />
      <MemoryCard src={creed} name="Creed Bratton" />
      <MemoryCard src={darryl} name="Darryl Philbin" /> */}
      {display}







    </div>
  )
}



