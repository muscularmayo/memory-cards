import './App.css';
import MemoryCardGrid from './MemoryCardGrid.js';
import React, { useState, useEffect } from 'react';
import Header from './Header.js'
import michael from './images/michael_scott.jpeg'
import andy from './images/andy_bernard.webp'
import angela from './images/angela_martin.webp'
import cathy from './images/cathy_simms.jpeg'
import charles from './images/charles_miner.jpeg'
import clark from './images/clark_green.jpeg'
import creed from './images/creed_bratton.webp'
import darryl from './images/darryl_philbin.webp'
import david from './images/david_wallace.jpeg'
import deangelo from './images/deangelo_vickers.jpeg'
import dwight from './images/dwight_schrute.jpeg'
import erin from './images/erin_hannon.jpeg'
import gabe from './images/gabe_lewis.jpeg'
import hank from './images/hank_tate.webp'
import holly from './images/holly_flax.webp'
import jan from './images/jan_levinson.png'
import jim from './images/jim_halpert.jpeg'
import jo from './images/jo_bennett.png'
import karen from './images/karen_flilipelli.jpeg'
import kelly from './images/kelly_kapoor.jpeg';
import kevin from './images/kevin_malone.webp';
import meredith from './images/meredith_palmer.webp';
import mose from './images/mose_schrute.webp'
import nate from './images/nate_nickerson.jpeg';
import nellie from './images/nellie_bertram.webp';
import oscar from './images/oscar_martinez.jpeg'
import pam from './images/pam_beesly.webp'
import pete from './images/pete_miller.webp'
import phyllis from './images/phyllis_vance.webp'
import robert from './images/robert_california.jpeg'
import roy from './images/roy_anderson.webp'
import ryan from './images/ryan_howard.jpeg'
import stanley from './images/stanley_hudson.png'
import toby from './images/toby_flenderson.png'
import todd from './images/todd_packer.jpeg'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [chosenCards, setChosenCards] = useState([])
  const [cardDisplay, setCardDisplay] = useState([
    {
      name: 'Michael Scott',
      image: michael,
    },
    {
      name: 'Mose Schrute',
      image: mose,
    },
    {
      name: 'Jim Halpert',
      image: jim
    },
    {
      name: 'Pam Beesly',
      image: pam,
    },
    {
      name: 'Dwight K. Schrute',
      image: dwight,
    },
    {
      name: 'Ryan Howard',
      image: ryan,
    },
    {
      name: 'Kelly Kapoor',
      image: kelly,
    },
    {
      name: 'Stanley Hudson',
      image: stanley,
    },
    {
      name: 'Toby Flenderson',
      image: toby,
    },
    {
      name: 'Roy Anderson',
      image: roy,
    },
    {
      name: 'Jan Levinson',
      image: jan,
    },
    {
      name: 'Todd Packer',
      image: todd,
    },
    {
      name: 'Kevin Malone',
      image: kevin,
    },
    {
      name: 'Meredith Palmer',
      image: meredith,
    },
    {
      name: 'Andy Bernard',
      image: andy,
    },
    {
      name: 'Angela Martin',
      image: angela,
    },
    {
      name: 'Creed Bratton',
      image: creed,
    },
    {
      name: 'Darryl Philbin',
      image: darryl,
    },
    {
      name: 'David Wallace',
      image: david,
    },
    {
      name: 'Oscar Martinez',
      image: oscar,
    },
    {
      name: 'Deangelo Vickers',
      image: deangelo,
    },
    {
      name: 'Erin Hannon',
      image: erin,
    },
    {
      name: 'Gabe Lewis',
      image: gabe,
    },
    {
      name: 'Hank Tate',
      image: hank,
    },
    {
      name: 'Holly Flax',
      image: holly,
    },
    {
      name: 'Jo Bennett',
      image: jo,
    },
    {
      name: 'Karen Filippelli',
      image: karen,
    },
    {
      name: 'Nate Nickerson',
      image: nate,
    },
    {
      name: 'Nellie Bertram',
      image: nellie,
    },
    {
      name: 'Pete Miller',
      image: pete,
    },
    {
      name: 'Phyllis Vance',
      image: phyllis
    },
    {
      name: 'Robert California',
      image: robert,
    },
    {
      name: 'Cathy Simms',
      image: cathy,
    },
    {
      name: 'Charles Miner',
      image: charles,
    },
    {
      name: 'Clark Green',
      image: clark,
    },
  ])
  /*
  state is {
    score: currentScore,
    bestScore: bestScore,
    chosenCards: array of cards that are on this current run of memory (can be an array of strings) ex: ['michael scott'...]
    cardDisplay: all of the memory cards in an array, the order is the display order
  }

  score cannot be > bestScore
  chosenCards array length should be currentScore

  when i click a card
  1. check if that card is in chosenCards list
  2. if not, add to chosenCards, set score to length, determine if bestScore needs to be updated
  3. if yes, reset chosenCards, set score to 0, leave bestScore as is
  */


  const shuffle = (array) => {
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

  const incrementScore = () => {
    //everytime we click something we can use this function to do score stuff? remains to be seen just here for organization
    let newScore = score + 1
    setScore(newScore)
    if (newScore > bestScore) {
      setBestScore(newScore)
    }
    if(newScore === cardDisplay.length) {
      alert('YOU WIN!')
      //we'll figure something out here, like a game loop of play again? or something
    }
  }

  const shuffleDisplay = () => {
    let currentDisplay = [...cardDisplay]
    let shuffledDisplay = shuffle(currentDisplay)
    setCardDisplay(shuffledDisplay)
  }

  const memoryCardClick = (cardName) => {
    //cardName is just the name on the card
    //console.log(cardName, typeof cardName)

    //when the user clicks on a image card we have to choose 1 of 2 options
    if (chosenCards.includes(cardName)) {
      //else if card is in chosenCards array
      //setScore(0) and setChosenCards([])
      setScore(0)
      setChosenCards([])
    } else {
      //if card is not already in chosenCards array, make a copy of chosenCards, push new card into array, change chosenCards
      //also increment the score up and determineBestScore()
      incrementScore()
      let currentChosenCards = [...chosenCards]
      currentChosenCards.push(cardName)
      setChosenCards(currentChosenCards)
    }
    shuffleDisplay()

  }


  useEffect(() => {
    shuffleDisplay()
  }, [])

  return (
    <div className="App">
      <Header bestScore={bestScore} currentScore={score}/>
      <MemoryCardGrid memoryCardClick={memoryCardClick} cardDisplay={cardDisplay}/>
    </div>
  );
}

export default App;

/* notes for next step:

when i click on a card, we check that specific card against the chosenCards array. we can use the name, pass it up in the
function which will call memoryCardClick from this, and i guess we'll figure it out from there.


*/