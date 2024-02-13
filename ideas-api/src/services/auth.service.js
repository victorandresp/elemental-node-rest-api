const { JWTHelper } = require('../helpers')
const { ThrowHttpError } = require("../helpers")
let _userService = null

class AuthService extends BaseService {
    constructor({ UserService }){
        _userService = UserService
    }

    async signUp(user){
        const { username } = user
        const userExists = await _userService.getUserByUsername(username)
        if(userExists){
            ThrowHttpError(409, "user already exists")
        }
        return await _userService.create(user)
    }
}

module.exports = AuthService