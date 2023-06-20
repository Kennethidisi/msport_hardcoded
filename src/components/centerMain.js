import banner from "./images/banner.webp"
import Fixture from "./fixture"
import { MyFixtures } from "./myFixtures"
import Live from "./live"

export default function CenterMain(){

    let new_fixtures = MyFixtures.map((fixtures, index)=>{
        return <Fixture key={index}  homeImg={fixtures.homeImg} homeName={fixtures.homeName} awayImg={fixtures.awayImg} awayName={fixtures.awayName} />
    })

    return(
        <section className="center_sect">
            <div className="banner">
                <img src={banner}/>
            </div>

            <section className="featured_sect">
                <h2 className="featured_title">Featured Matches</h2>
                <div className="featured_div">
                    {new_fixtures}
                </div>
            </section>

            <Live/>
        </section>
    )
}