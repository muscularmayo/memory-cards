import React, { useState } from 'react';
import MemoryCard from './MemoryCard.js'
import michael from './images/michael_scott.jpeg'
import andy from './images/andy_bernard.webp'
import angela from './images/angela_martin.webp'
import cathy from './images/cathy_simms.jpg'
import charles from './images/charles_miner.jpeg'
import clark from './images/clark_green.jpeg'
import creed from './images/creed_bratton.png'
import darryl from './images/darryl_philbin.png'
import david from './images/david_wallace.jpeg'
import deangelo from './images/deangelo_vickers.jpeg'
import dwight from './images/dwight_schrute.jpeg'
import erin from './images/erin_hannon.jpeg'
import gabe from './images/gabe_lewis.jpeg'
import hank from './images/hank_tate.png'
import holly from './images/holly_flax.jpeg'
import jan from './images/jan_levinson.png'
import jim from './images/jim_halpert.jpeg'
import jo from './images/jo_bennett.jpeg'
import karen from './images/karen_flilipelli.jpeg'
import kelly from './images/kelly_kapoor.png';
import kevin from './images/kevin_malone.jpeg';
import meredith from './images/meredith_palmer.png';
import nate from './images/nate_nickerson.jpeg';
import nellie from './images/nellie_bertram.jpeg';
import oscar from './images/oscar_martinez.png'
import pam from './images/pam_beesly.webp'
import pete from './images/pete_miller.jpeg'
import phyllis from './images/phyllis_vance.png'
import robert from './images/robert_california.jpeg'
import roy from './images/roy_anderson.jpeg'
import ryan from './images/ryan_howard.jpeg'
import stanley from './images/stanley_hudson.png'
import toby from './images/toby_flenderson.png'
import todd from './images/todd_packer.jpeg'

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

  return (
    <div className="memory-card-grid">
      <MemoryCard src={michael} name="Michael" />
      <MemoryCard src={andy} name="Andy Bernard" />
      <MemoryCard src={angela} name="Angela Martin" />
      <MemoryCard src={cathy} name="Cathy Simms" />
      <MemoryCard src={charles} name="Charles Miner" />
      <MemoryCard src={clark} name="Clark Green" />
      <MemoryCard src={creed} name="Creed Bratton" />
      <MemoryCard src={darryl} name="Darryl Philbin" />







    </div>
  )
}



