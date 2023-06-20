import { createContext,useState } from "react";

export const menuContext = createContext();

export default function Context({children}){
    const [showMenu, setShowmenu] = useState(false)
    return(
        <menuContext.Provider value={{showMenu, setShowmenu}}>
            {children}
        </menuContext.Provider>
    )
}