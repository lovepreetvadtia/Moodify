import { NavLink } from "react-router"
import { useState } from "react"
import FormGroup from "../components/FormGroup"
import '../styles/auth.style.scss'
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router"

const Login = () => {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const {handleLogin,loading} = useAuth()
  const navigate= useNavigate()

async function handleSubmit(e){
e.preventDefault()
await handleLogin({identifier,password})
navigate('/')
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
      <FormGroup 
      value={identifier}
      onChange={(e)=>{setIdentifier(e.target.value)}}
      label='Email/Username' placeholder='Enter Email or Username' />
      
      <FormGroup 
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      label='Password' placeholder='Enter Password' />
      <button className='button'>Login</button>
      <p>Don't Have a Account?<NavLink to="/register">Register</NavLink></p>
        </form>
    </div>
  )
}

export default Login
