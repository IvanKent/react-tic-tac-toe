import './tiktactoe.css'
import Square from './Square'
import { useState } from 'react'
export default function Button() {
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))

    const handleClick = (i) => {
        if(squares[i]){
            return;
        }
        const nextSquares = squares.slice();
        xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O';
        setXIsNext(!xIsNext)
        setSquares(nextSquares)
    }
    return (
        <div className="boxContainer">
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