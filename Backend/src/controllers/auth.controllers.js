import bcrypt from 'bcryptjs'
import { userModel } from '../models/user.model.js'
import jwt from 'jsonwebtoken'
// import { blackListModel } from '../models/blacklist.model.js'
import { redis } from '../config/cache.js'


export async function registerController(req,res) {
   const {email,username,password,profileImg} = req.body

//    console.log(req.body) 
if(!email){
    return res.status(400).json({
        message:"Email Is Required"
    })}
if(!username){
    return res.status(400).json({
        message:"Username Is Required"
    })}

   const UserExist =await userModel.findOne({
    $or:[{email},{username}]})

    if(UserExist){
        return res.status(400).json({
            message:"User Already Exists"
        })}

    const hash =await bcrypt.hash(password,10)

    const user = await userModel.create({
        email,username,password:hash,profileImg
    })


    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn:'1d'})

    res.cookie('token',token)

    res.status(201).json({
        message:"User Sucessfully Created",
        username:user.username,
        email:user.email,
        profileImg:user.profileImg
    })
}

export async function  loginController(req,res) {
    const {email,username,password} =req.body
    
    const user =await userModel.findOne({
        $or:[
        {email},
        {username}
        ]}).select('+password')
    if(!user){
        res.status(409).json({
            message:"Invalid Credentials"
        })}
    
    const isPassValid = await bcrypt.compare(password,user.password)

    if(!isPassValid){
        return res.status(409).json({
            message:"Invalid Credentials"
        })}

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("token",token)

    res.status(200).json({
        message:"User Sucessfully Logged In",
        username:user.username,
        email:user.email,
        profileImg:user.profileImg
    })  
}

export async function getMeController(req,res){
    const user = await userModel.findById(req.user.id)
    // console.log(req.user.id)
    // const user = await userModel.findById(req.user._id)

    res.status(200).json({
        message:"User Fetched Sucessfully",
        user
    })
}

export async function userLogOut(req,res){
    const token = req.cookies.token

    if(!token){
        return res.status(404).json({
            message:"Token Not Found"
        })
    }

    res.clearCookie("token")

    await redis.set(token,"token","EX", 60 * 60)

    res.status(200).json({
        message:"User Logout Sucessfully"
    })
}