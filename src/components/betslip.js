export default function Betslip(){
    return(
        <div className="betslip_div">
            <span className="betslip_top">
                <p className="slip">Bet Slip</p>
                <p className="bet">My Bets</p>
            </span>
            <article className="betslip_centre">
                <p>Please insert booking code<img/></p>
                <input type="text" placeholder="Booking Code"/>
            </article>
            <button className="betslip_btn">Load</button>
        </div>
    )
}