import Board from "./Board"
import './tiktactoe.css'
import { useState } from "react"
export default function Game(){
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)])
    const currentSquares = history[history.length - 1]

    const handlePlay = (nextSquares) => {
        setXIsNext(!xIsNext)
        setHistory([...history], nextSquares)
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
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });
      
    return (
        <div>
            <div>
                <Board xIsNext={xIsNext} squares={currentSquares} onplay={handlePlay}/>
            </div>
            <ol>
                {moves}
            </ol>
        </div>
    )
}