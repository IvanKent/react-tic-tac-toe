import Board from "./Board"
import './tiktactoe.css'
import { useState } from "react"
export default function Game(){
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)])
    const currentSquares = history[history.length - 1]

    const handlePlay = (nextSquares) => {
        setHistory([...history], nextSquares)
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
          <li>
            <button className="historyButton" onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });

    return (
        <div className="gameContainer">
            <div>
                <Board xIsNext={xIsNext} squares={currentSquares} handlePlay={handlePlay}/>
            </div>
            <ol>
                {moves}
            </ol>
        </div>
    )
}