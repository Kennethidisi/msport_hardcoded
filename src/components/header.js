import flag from "./images/flag.jpg"
import logo from "./images/msport logo.png"
import menu from "./images/menu.png"
import "./header.css"
import { useContext } from "react"
import { menuContext } from "../context"

export default function Header(){
    const {showMenu, setShowmenu} = useContext(menuContext);
    
    function handleClick(){
        setShowmenu(!showMenu)
    }
    return(
        <header>
            <div className="m_sport">
                <img src={logo} className="logo" width={100}/>
                <span className="flag_span"><img src={flag} className="flag" width={15}/> NIGERIA</span>
            </div>

            <div className="h_right_div">
                <span className="phone_span">
                    <select>
                        <option>+234</option>
                        <option>+233</option>
                        <option>+256</option>
                    </select>
                    <input type="text" placeholder="Mobile Phone"/>
                </span>

                <input type="password" placeholder="Password" className="password"/>

                <button className="login">Login</button>

                <button className="sign_up ">Sign Up</button>
            </div>
            
            <img src={menu} className="menu" width={25} onClick={handleClick}/>
        </header>
    )
}