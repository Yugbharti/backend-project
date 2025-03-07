import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
//to take json data
app.use(express.json({limit:"16kb"}))
//to take url data
app.use(express.urlencoded({extended: true,limit:"16kb"}))
//to take data from the cookies
app.use(cookieParser())
//to store common data in public folder
app.use(express.static("public"))

//routes import 
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users",userRouter)

export default app;