/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";



const userContext = createContext();

export function UserProvider({children}) {
    const [userToken, setUserToken] = useState(null);
    const [userData, setUserData] = useState({});
    const [userId, setUserId] = useState(null);


    useEffect(function() {
        if(localStorage.getItem('userToken') !== null) setUserToken(localStorage.getItem('userToken'));
        if(localStorage.getItem('userData') !== null) setUserData(JSON.parse(localStorage.getItem('userData')));
        if(localStorage.getItem('userId') !== null) setUserId(localStorage.getItem('userId'));
    }, [])

    return <userContext.Provider value={{userToken, setUserToken, userData, setUserData, userId, setUserId}}>
        {children}
    </userContext.Provider>
}   


export function useUserContext() {
    const context = useContext(userContext);

    if(context === undefined) throw new Error("user context used outside its provider");
    
    return context
}

