import './tiktactoe.css'
import Square from './Square'
import { useState } from 'react'
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

export default function Board({xIsNext, squares, handlePlay}) {
    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = `Winner is Player: ${winner}`
    }else{
        status = `Next Player is: ` + (xIsNext ? 'X' : 'O')
    }

    const handleClick = (i) => {
        if(squares[i] || calculateWinner(squares)){
            return;
        }
        const nextSquares = squares.slice();
        xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O';
        handlePlay(nextSquares)
    }
    return (
        <div className="boxContainer">
            <div>
                {status}
            </div>
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