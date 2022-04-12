import React, { useState } from 'react';
import MemoryCard from './MemoryCard.js'


import './memorycard.css';

export default function MemoryCardGrid (props) {
  // [andy, angela, cathy, charles, clark, creed, darryl, david, deangelo, dwight, erin, gabe, hank, holly, jan, jim, jo, karen,
  //  kelly, kevin, meredith, nate, nellie, oscar, pam, pete, phyllis, robert, roy, ryan, stanley, toby, todd]

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

  const display = props.cardDisplay.map((obj, index) => {
    return (
    <MemoryCard src={obj.image} name={obj.name} key={index} />
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



