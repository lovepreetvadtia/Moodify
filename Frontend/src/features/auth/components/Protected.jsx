import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router'

const Protected = ({children}) => {
    const {loading,user} = useAuth()

    if(loading){
        return <h2>Loading....</h2>
    }

    if(!user&&!loading){
        return <Navigate to='/login'/>
    }


  return children
}

export default Protected