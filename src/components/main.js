import LeftMain from "./leftMain";
import CenterMain from "./centerMain";
import RightMain from "./rightMain";
import "./main.css"

export default function Main(){
    return(
        <main>
            <LeftMain/>
            <CenterMain/>
            <RightMain/>
        </main>
    )
}