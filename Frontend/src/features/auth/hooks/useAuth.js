import { useContext,useState } from "react";
import { AuthContext } from "../context/auth.context";
import { logIn,register,logout,getMe } from "../services/services.api";
import { useEffect } from "react";

export function useAuth(){
    const context = useContext(AuthContext)
    const {user,setUser,loading,setLoading} = context

async function handleLogin({identifier,password}) {
        setLoading(true)
        const response =await logIn({identifier,password})
        setUser(response.user)
        setLoading(false)
    }

async function handleRegister({email,username,password}) {
        setLoading(true)
        const response =await register({email,username,password})
        setUser(response.user)
        setLoading(false)
    }

async function handleLogout(){
        setLoading(true)
        const response =await logout()
        setUser(null)
        setLoading(false)
    }

async function handleGetme() {
    setLoading(true)
    const response = await getMe()
    setUser(response.user)
    setLoading(false)
}

useEffect(()=>{
handleGetme()
},[])

    return({
        user,loading,handleLogin,handleRegister,handleLogout,handleGetme})
}