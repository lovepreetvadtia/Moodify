import axios from "axios"

const api = axios.create({
    baseURL:"https://moodify-aj90.onrender.com/api",
    withCredentials:true
})

export async function getSong({mood}){
const response =await api.get('/song?mood='+mood)

console.log(response.data)
return response.data
}