import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext()

export function AuthProvider({children}){

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    return(
        <AuthContext.Provider value={{loading,setLoading,user,setUser}}> 
        {children}
        </AuthContext.Provider>
    )
}