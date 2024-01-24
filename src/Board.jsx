import './tiktactoe.css'
import Square from './Square'
import { useState } from 'react'
export default function Button() {
    const [squares, setSquares] = useState(Array(9).fill(null))

    const handleClick = (i) => {
        const nextSquares = squares.slice();
        nextSquares[i] = "X";
        console.log(`${i}: ${nextSquares[i]}`)
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