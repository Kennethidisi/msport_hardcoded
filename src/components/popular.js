import today from "./images/today.png"
import best from "./images/best.png"
import AI from "./images/ai_best.png"
import odds from "./images/odds.png"
import booking from "./images/booking.png"

export default function Popular(){
    return(
        <div className="popular">
            <h3>Pop<small>ular</small></h3>
            <nav className="popular_nav">
                <a><img width={25} src={today}/>Today Matches</a>
                <a><img width={25} src={best}/>Best Odds</a>
                <a><img width={25} src={AI}/>AI Best Odds</a>
                <a><img width={25} src={odds}/>Odds</a>
                <a><img width={25} src={booking}/>Booking Codes</a>
            </nav>
        </div>
    )
}