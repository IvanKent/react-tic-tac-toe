import Board from "./Board"
import './tiktactoe.css'
import { useState } from "react"
export default function Game(){
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove]

    const handlePlay = (nextSquares) => {
      const nextHistory = [...history.slice(0, currentMove +1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext)
    }

    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });

    const jumpTo = (nextMove) => {
      setCurrentMove(nextMove);
      setXIsNext(nextMove % 2 === 0);
    }
    return (
        <div className="gameContainer">
            <div>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <ol>
              {moves}
            </ol>
        </div>
    )
}