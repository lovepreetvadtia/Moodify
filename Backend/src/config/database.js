import mongoose from "mongoose";

export async function ConntectToDB() {
    await mongoose.connect(process.env.MONGO_URI)
    .then((res)=>{
        console.log("Connected To DB")
    })
}