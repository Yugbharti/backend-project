import { configDotenv } from "dotenv"
import connectDB from "./db/index.js"

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is listening at ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("Error in mongodb connection !! ",err);
})