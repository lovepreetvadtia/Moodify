import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email:{
        required:[true,'Email is Required'],
        unique:[true,'Email Must be Unique'],
        type:String
    },
    username:{
        required:[true,'username is required'],
        unique:[true,'Username must be unique'],
        type:String
    },
    password:{
        type:String,
        required:[true,'Password is Required'],
        select:false
    },
    profileImg:{
        default:"https://ik.imagekit.io/hnoglyswo0/avatar-gender-neutral-silhouette-vector-600nw-2470054311.webp",
        type:String
    }
})

export const userModel = mongoose.model('users',UserSchema)