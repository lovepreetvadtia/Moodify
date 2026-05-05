import FaceExpression from "../components/FaceExpression"
import Nav from "../components/Nav"
import { Player } from "../features/player/components/Player"
import { useSong } from "../features/player/hooks/useSong"


const Home = () => {
  const {handleSong} = useSong()

  return (
    <div>
      <Nav/>
      <FaceExpression onClick={(expression)=>{handleSong({mood:expression})}}/>
      <Player/>
    </div>
  )
}

export default Home
