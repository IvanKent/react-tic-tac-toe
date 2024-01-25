import './tiktactoe.css'
import Square from './Square'
import { useState } from 'react'

// helper function
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  // ---------------------------------------------------------------

export default function Board({xIsNext, squares, onPlay}) {
    const handleClick = (i) => {
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        const nextSquares = squares.slice();
        xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O';
        console.log(nextSquares)
        onPlay(nextSquares)
    }

    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = `Winner is Player: ${winner}`
    }else{
        status = `Next Player is: ` + (xIsNext ? 'X' : 'O')
    }
    return (
        <div className="boxContainer">
            <div className="status">{status}</div>
            <div className="boxRowContainer">
                <Square value={squares[0]} handleClick={() => (handleClick(0))}/>
                <Square value={squares[1]} handleClick={() => (handleClick(1))}/>
                <Square value={squares[2]} handleClick={() => (handleClick(2))}/>
            </div>
            <div className="boxRowContainer">
                <Square value={squares[3]} handleClick={() => (handleClick(3))}/>
                <Square value={squares[4]} handleClick={() => (handleClick(4))}/>
                <Square value={squares[5]} handleClick={() => (handleClick(5))}/>
            </div>
            <div className="boxRowContainer">
                <Square value={squares[6]} handleClick={() => (handleClick(6))}/>
                <Square value={squares[7]} handleClick={() => (handleClick(7))}/>
                <Square value={squares[8]} handleClick={() => (handleClick(8))}/>
            </div>
        </div>
    )
}