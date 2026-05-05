import axios from 'axios'

export const api = axios.create({
    baseURL:"https://moodify-aj90.onrender.com/api/auth",
    withCredentials:true,
})

export async function logIn({identifier,password}) {
    
  try {

    const response = await api.post('login',{
        email:identifier,
        username:identifier,
        password})
    return response.data
    } 
    catch (error) {
    throw error}  
}

export async function register({email,username,password}) {
    
    try {
    const response = await api.post('/register',{
        email,username,password})
    return response.data}

    catch (error) {
     throw error}
}

export async function getMe(){
    const response =await api.get('/get-me')
    return response.data
}

export async function logout() {
    const response = api.get('/logout')
    return response.data
}