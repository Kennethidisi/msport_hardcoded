

export default function Fixture(props){
    return(
        <div className="fixture_div">
            <p className="best_odds">Best Odds🔥</p>

            <article className="fixture">
                <span className="home">
                    <img src={props.homeImg} width={45}/>
                    <h5>{props.homeName}</h5>
                </span>

                <span className="time_date">
                    <h3>18:30</h3>
                    <p>27/05</p>
                </span>

                <span className="away">
                    <img src={props.awayImg} width={45}/>
                    <h5>{props.awayName}</h5>
                </span>
            </article>

            <div className="odds_div">
                <span>
                    <p className="score">1</p>
                    <p className="point">3.34</p>
                </span>

                <span>
                    <p className="score">X</p>
                    <p className="point">3.08</p>
                </span>

                <span>
                    <p className="score">2</p>
                    <p className="point">2.34</p>
                </span>
            </div>

            <div className="laliga">
                <p>LaLiga</p>
                <p>More Events(12)</p>
            </div>
        </div>
    )
}