// asyncHandler is a helper function to catch errors in async Express routes.
//  It removes the need for try...catch inside every route.
//  If an error occurs, it automatically forwards it to Express's built-in error handler.

const asyncHandler = (requestHandeler)=>{
    (req,res,next) => {
        Promise.resolve(requestHandeler(req,res,next))
        .catch((err)=>next(err))
    }
}
export {asyncHandler}