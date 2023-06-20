import { menuContext } from "../context";
import Popular from "./popular";
import Soccer from "./soccer";
import { useContext } from "react";


export default function LeftMain(){
    const{showMenu, setShowmenu} = useContext(menuContext);
    console.log(showMenu)

    return(
        <address className={showMenu? "slide" : "noSlide"}>
            <Popular/>
            <Soccer/>
        </address>
    )
}