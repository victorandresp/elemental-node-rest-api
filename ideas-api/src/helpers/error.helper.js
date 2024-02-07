module.exports = (code = 500, message = "internal error") =>{
    const error = new Error()
    error.status = code
    error.message = message
    throw error;
}