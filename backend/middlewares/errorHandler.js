//not found
const notFound=(req,res,next)=>{
    const error = new Error(`Not Found :${req.originalUrl} `);
    re.status(404);
    next(error)
}
//Error hanlder

const errorHandler = (err,req,res,next)=>{
    const statuscode= res.statusCode==200?500:res.statuscode
    res.status(statuscode);
    res.json({
        message:err?.message,
        stack:err?.stack
    })
}
module.exports ={errorHandler,notFound}