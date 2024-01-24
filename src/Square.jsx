export default function Square({squares = 0, handleClick}) {
    return (
        <button onClick={handleClick}>{squares}</button>
    )
}