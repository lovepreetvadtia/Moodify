import React,{useState} from 'react'
import FormGroup from '../components/FormGroup'
import { NavLink } from 'react-router'
import {useAuth} from '../hooks/useAuth.js'
import { useNavigate } from 'react-router'

const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
 const {handleRegister} =useAuth()

  async function HandleSubmit(e){
    e.preventDefault()
    await handleRegister({email,username,password})
    navigate('/')
  }
  

  return (
   <div>
        <form onSubmit={HandleSubmit}>
          <h2>Register</h2>
      <FormGroup 
      value={email} 
      onChange={(e)=>{setEmail(e.target.value)}}
      label='Email' placeholder='Enter Email' />
      <FormGroup
      value={username} 
      onChange={(e)=>{setUsername(e.target.value)}}
      label='username' placeholder='Enter Username' />
      <FormGroup 
      value={password} 
      onChange={(e)=>{setPassword(e.target.value)}}
      label='Password' placeholder='Enter Password' />
      <button className='button' >Sign Up</button>
      <p>Already Have an Account?<NavLink to="/login">Login</NavLink></p>
        </form> 
    </div>
  )
}

export default Register
