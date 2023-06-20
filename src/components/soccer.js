import ball from "./images/ball.png"

export default function Soccer(){
    return(
        <section className="soccer_sect">
            <div className="soccer_div"><span className="ball"><img src={ball} width={23}/>Soccer</span> 1126</div>

            <div className="top_leagues">
                <span>Top Leagues <p>168</p></span>
                <span>England <p>15</p></span>
                <span>Italy <p>17</p></span>
                <span>Spain <p>47</p></span>
                <span>Germany <p>29</p></span>
                <span>France <p>31</p></span>
                <div className="a_z">A-Z</div>
                <span>Algeria <p>18</p></span>
                <span>Argentina <p>16</p></span>
                <span>Armenia <p>2</p></span>
                <span>Australia <p>1</p></span>
                <span>Austria <p>3</p></span>
                <span>Austria <p>3</p></span>
                <span>Austria <p>3</p></span>
                <span>Austria <p>3</p></span>
                <span>Austria <p>3</p></span>
                <span>Austria <p>3</p></span>
                <span>Austria <p>3</p></span>
                <span>Austria <p>3</p></span>
            </div>

            <div className="v_soccer">
                <span>V-Soccer <p>18</p></span>
                <span>ESports Soccer <p>16</p></span>
                <span>Basketball <p>2</p></span>
                <span>ESports Basketball <p>1</p></span>
                <span>Table Tennis <p>3</p></span>
                <span>Tennis <p>3</p></span>
                <span>Ice Hockey <p>3</p></span>
                <span>Volleyball <p>3</p></span>
                <span>Darts <p>3</p></span>
            </div>
        </section>
    )
}