import multer from "multer";

const storage= multer.memoryStorage()
export const upload = multer({
    storage:storage,
    limits:1024*1024*10 //File Size Limit:- 10MB
})
