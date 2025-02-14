/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";



const darkModeContext = createContext();

export function DarkModeProvider({children}) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    useEffect(() => {
        if (isDarkMode === true) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("isDarkMode", isDarkMode);
      }, [isDarkMode]);

    return <darkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
        {children}
    </darkModeContext.Provider>
}   


export function useDarkModeContext() {
    const context = useContext(darkModeContext);

    if(context === undefined) throw new Error("dark mode context used outside its provider");
    
    return context
}

