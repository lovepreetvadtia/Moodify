import { useContext } from "react";
import { SongContext } from "../player.context.jsx";
import { getSong } from "../services/Song.Services.js";

export function useSong(){
   const context = useContext(SongContext)
   const {Loading,setLoading,song,setSong} = context

async function handleSong({mood}) {
    setLoading(true)
    const response = await getSong({mood})
    setSong(response.song)
    setLoading(false)   
   }

return ({song,handleSong,Loading})
}