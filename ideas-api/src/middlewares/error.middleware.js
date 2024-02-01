
module.exports = (req, res, next) =>{
    const httpStatus = err.status || 500
    return res.status(404).send({
        status: httpStatus, 
        message: err.message || "Internal Server Error"
    })
}