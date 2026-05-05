import mongoose from "mongoose"


const blacklistSchema = new mongoose.Schema({
    token:{
        type:String,
        required:[true,'Token Is Required']
    }
},{timestamps:true})

export const blackListModel = mongoose.model('blacklist',blacklistSchema)