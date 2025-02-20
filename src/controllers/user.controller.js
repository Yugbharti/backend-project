import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser = asyncHandler( (req,res)=>{
    res.status(200).json({
        message:"hello folk good to see you !!"
    })
} )

export default registerUser