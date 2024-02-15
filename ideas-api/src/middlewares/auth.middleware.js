const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")
const { ThrowHttpError } = require("../helpers")

module.exports = (req, res, next) =>{
    const token = req.headers["authorization"]
    if(!token){
        return res.status(401).send({ message: "token must be sent" })
    }

    jwt.verify(token, JWT_SECRET, (err, decodedToken) =>{
        if(!err){
            req.user = decodedToken.user
            next();
        }else{
            ThrowHttpError(401, "token invalid")
        }
    })
}