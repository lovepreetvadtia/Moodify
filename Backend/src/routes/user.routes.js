import express from 'express'
import {registerController,loginController, getMeController,userLogOut} from '../controllers/auth.controllers.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'
export const AuthRouter = express.Router()

AuthRouter.post('/register',registerController)
AuthRouter.post('/login',loginController)
AuthRouter.get('/get-me',authMiddleware,getMeController)
AuthRouter.get('/logout',authMiddleware,userLogOut)
