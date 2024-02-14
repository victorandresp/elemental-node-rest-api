const BaseService = require("./base.service")
const { JWTHelper } = require('../helpers')
const { ThrowHttpError } = require("../helpers")
let _userService = null

class AuthService extends BaseService {
    constructor({ UserService }){
        super(UserService)
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

    async signIn(user){
        const { username, password } = user

        const userExists = await _userService.getUserByUsername(username)
        if(!userExists){
            ThrowHttpError(404, "user doesn't exists")
        }
        const validPassword = userExists.comparePasswords(password) // this function can be called because userExists is a mongoose entity of User Model.
        if(!validPassword){
            ThrowHttpError(401, "invalid password")
        }

        const userToEncode = {
            username: userExists.username,
            id: userExists._id
        }
        const token = JWTHelper(userToEncode)

        return { token, user: userExists }
    }
}

module.exports = AuthService