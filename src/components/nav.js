import search from "./images/search.png"
import "./nav.css"

export default function Nav(){
    return(
        <div className="nav_div">
            <nav className="main_nav">
                <a className="myhome">Home</a>
                <a>Sports</a>
                <a>Live Betting</a>
                <a>Virtual</a>
                <a>Games</a>
                <a>My Matches</a>
                <a>Jackpot</a>
                <a>Promotions</a>
                <a>App</a>
           </nav>

           <span><img src={search} width={20}/>Search</span>
        </div>
    )
}