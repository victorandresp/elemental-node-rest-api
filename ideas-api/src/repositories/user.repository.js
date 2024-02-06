const BaseReporsitory = require("./base.repository")

let _user = null

class UserRepository extends BaseReporsitory{
    constructor({ User }){
        super(User)
        _user = User
    }
}

module.exports = UserRepository