import { createContext,useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({children})=>{
    const [song, setSong] = useState(null)
    const [Loading, setLoading] = useState(false)

    return(
    <SongContext.Provider value={{song,setSong,Loading,setLoading}}>
        {children}        
    </SongContext.Provider>   
    )
}

