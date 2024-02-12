const { sign } = require("jsonwebtoken")
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../config")

module.exports.generateToken = function(user){
    return sign({ user }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN})
}