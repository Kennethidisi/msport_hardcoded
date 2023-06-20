import graph from "./images/graph.png"

export default function Live(){
    return(
        <section className="live_sect">
            <h3>Liv<span>e</span></h3>

            <div className="live_soccer_nav">
                <nav className="soccer_nav">
                    <a className="soccer_color">Soccer</a>
                    <a>V-Soccer</a>
                    <a>ESports Soccer</a>
                    <a>Basketball</a>
                    <a>Table Tennis</a>
                </nav>
            </div>

            <div className="over_under_div">
                <input type="text" value="1x2"/>
                <select>
                    <option>Over/Under</option>
                    <option>Double Chance</option>
                    <option>GG/NG</option>
                    <option>DNB</option>
                </select>
            </div>

            <div className="live_date">
                <h5>27/05 Saturday</h5>
                <span className="live_books">
                    <p>1</p>
                    <p>X</p>
                    <p>2</p>
                    <p>Goals</p>
                    <p>Over</p>
                    <p>Under</p>
                </span>
            </div>

            <div className="live_match_div">
                <div className="live_match">
                    <p>14:00</p>
                    <h5>Verona</h5>
                    <h5>Empoli</h5>
                    <p>+237</p>
                </div>

                <div className="live_odds">
                    <span>1.74</span>
                    <span>2.00</span>
                    <span>5.44</span>
                    <span>3.33</span>
                    <span>9.43</span>
                    <span>7.19</span>
                <img width={25} src={graph}/>
                </div>
            </div>

            <div className="live_match_div">
                <div className="live_match">
                    <p>14:00</p>
                    <h5>Verona</h5>
                    <h5>Empoli</h5>
                    <p>+237</p>
                </div>

                <div className="live_odds">
                    <span>1.74</span>
                    <span>2.00</span>
                    <span>5.44</span>
                    <span>3.33</span>
                    <span>9.43</span>
                    <span>7.19</span>
                <img width={25} src={graph}/>
                </div>
            </div>

            <div className="live_match_div">
                <div className="live_match">
                    <p>14:00</p>
                    <h5>Verona</h5>
                    <h5>Empoli</h5>
                    <p>+237</p>
                </div>

                <div className="live_odds">
                    <span>1.74</span>
                    <span>2.00</span>
                    <span>5.44</span>
                    <span>3.33</span>
                    <span>9.43</span>
                    <span>7.19</span>
                <img width={25} src={graph}/>
                </div>
            </div>

            <div className="live_match_div">
                <div className="live_match">
                    <p>14:00</p>
                    <h5>Verona</h5>
                    <h5>Empoli</h5>
                    <p>+237</p>
                </div>

                <div className="live_odds">
                    <span>1.74</span>
                    <span>2.00</span>
                    <span>5.44</span>
                    <span>3.33</span>
                    <span>9.43</span>
                    <span>7.19</span>
                <img width={25} src={graph}/>
                </div>
            </div>

            <div className="live_match_div">
                <div className="live_match">
                    <p>14:00</p>
                    <h5>Verona</h5>
                    <h5>Empoli</h5>
                    <p>+237</p>
                </div>

                <div className="live_odds">
                    <span>1.74</span>
                    <span>2.00</span>
                    <span>5.44</span>
                    <span>3.33</span>
                    <span>9.43</span>
                    <span>7.19</span>
                <img width={25} src={graph}/>
                </div>
            </div>

            <div className="live_match_div">
                <div className="live_match">
                    <p>14:00</p>
                    <h5>Verona</h5>
                    <h5>Empoli</h5>
                    <p>+237</p>
                </div>

                <div className="live_odds">
                    <span>1.74</span>
                    <span>2.00</span>
                    <span>5.44</span>
                    <span>3.33</span>
                    <span>9.43</span>
                    <span>7.19</span>
                <img width={25} src={graph}/>
                </div>
            </div>
        </section>
    )
}