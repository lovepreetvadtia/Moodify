import express from 'express'
import cors from "cors"
import { AuthRouter } from './routes/user.routes.js'
import cookieParser from 'cookie-parser'
import { songRouter } from './routes/song.routes.js'

export const app = express()
app.use(cors({
    credentials:true,
    origin:"https://moodify-8wbb.vercel.app"
}))
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',AuthRouter)
app.use('/api/song',songRouter)
