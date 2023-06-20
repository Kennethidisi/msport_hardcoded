import smallB from "./images/small_banner.jpg"
import smallB2 from "./images/small_b2.webp"

import Betslip from "./betslip";

export default function RightMain(){
    return(
        <section className="right_sect">
            <Betslip/>
            <img src={smallB} className="sB1"/>
            <img src={smallB2} className="sB2"/>
        </section>
    )
}