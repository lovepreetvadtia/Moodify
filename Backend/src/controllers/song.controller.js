import id3 from "node-id3";
import { uploadFile } from "../services/storage.services.js";
import { songModel } from "../models/song.model.js";

export async function uploadSong(req,res) {
    const songBuffer = req.file.buffer
    const tags = id3.read(songBuffer)
    const {mood} = req.body
    

    const [songFile,postFile]= await Promise.all([
    
    uploadFile({
        buffer:songBuffer,
        fileName:tags.title+'.mp3',
        folder:'/Moodify/songs'
    }),
    uploadFile({
        buffer:tags.image.imageBuffer,
        fileName:tags.title+'.jpeg',
        folder:"/Moodify/posters"
    })
])

    const song = await songModel.create({
        songUrl:songFile.url,
        posterUrl:postFile.url,
        title:tags.title,
        mood
    })

    res.status(201).json({
        message:'Song Created Successfully',
        song
    })
}

export async function getSong(req,res){
    const {mood} = req.query

    const song = await songModel.findOne({mood})

    res.status(200).json({
        message:"Song Fetched Successfully",
        song
    })
}
 