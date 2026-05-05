import env from 'dotenv'
env.config();
import ImageKit from "@imagekit/nodejs";
import { toFile } from "@imagekit/nodejs";

const client = new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

export async function uploadFile({buffer,fileName,folder=""}) {
    const file =await client.files.upload({
        file: await ImageKit.toFile(Buffer.from(buffer)),
        fileName:fileName,
        folder 
    })

    return file
}


