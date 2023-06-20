import Header from "./components/header";
import "./app.css"
import Nav from "./components/nav"
import Main from "./components/main";
import { useContext } from "react";
import { menuContext } from "./context";

export default function App(){
    const{showMenu} = useContext(menuContext)
    return(
        <div className={showMenu? "fix" : "container"}>
            <Header/>
            <Nav/>
            <Main/>
            <footer>
                <p>&copy; Copyrights{new Date().getFullYear()}. All rights reserved. Designed by Kenneth.  Powered by Codeprof Academy. <br/> Phone: 09037918492</p>
            </footer>
        </div>
    )
}