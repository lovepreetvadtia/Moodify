import FaceExpression from './components/FaceExpression'
import {RouterProvider } from 'react-router'
import Home from './pages/Home'
import { routes } from './app.routes'
import './shared/styles/global.scss'
import { AuthProvider } from './features/auth/context/auth.context'
import { SongContextProvider } from './features/player/player.context'

function App() {

  return (
    <div className='mainDiv'>
    <AuthProvider>
      <SongContextProvider>
    <RouterProvider router={routes} />
      </SongContextProvider>
    </AuthProvider>
    </div>
  )
}

export default App
