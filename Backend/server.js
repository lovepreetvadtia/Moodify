import {configDotenv} from "dotenv";
// env.config()
configDotenv()
import { app } from "./src/app.js";
import { ConntectToDB } from "./src/config/database.js";

app.listen(3000, console.log(
    'Server is Running on port 3000'
))

ConntectToDB()