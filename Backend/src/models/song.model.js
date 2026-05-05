import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
    songUrl:{
        type:String,
        required:true
    },
    posterUrl:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    mood:{
        type:String,
        enum:{
         values:['Neutral','happy','surprised','sad'],
         message:'this is enum,'
        }
    }
})

export const songModel = mongoose.model('songs',SongSchema)