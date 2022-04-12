import Score from './Score.js'

export default function Header (props) {
  return (
    <div id="header">
      <h1>
        The Office - Memory Game
      </h1>
      <Score bestScore={props.bestScore} currentScore={props.currentScore}/>
    </div>

  )
}


