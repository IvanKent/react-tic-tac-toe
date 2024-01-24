export default function Square({value = 0, handleClick}) {
    return (
        <button onClick={handleClick}>{value}</button>
    )
}