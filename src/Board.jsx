import './tiktactoe.css'
import Square from './Square'
export default function Button() {
    return (
        <div className="boxContainer">
            <div className="boxRowContainer">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="boxRowContainer">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="boxRowContainer">
                <Square/>
                <Square/>
                <Square/>
            </div>
        </div>
    )
}