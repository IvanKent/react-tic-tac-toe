import './tiktactoe.css'
export default function Square({value, handleClick}) {
    return (
        <button className="squareButton" onClick={handleClick}>{value}</button>
    )
}