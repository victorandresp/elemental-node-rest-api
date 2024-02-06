const BaseReporsitory = require("./base.repository")

let _comment = null

class CommentRepository extends BaseReporsitory{ 
    constructor({ Comment }){
        super(Comment)
        _comment = Comment
    }
}

module.exports = CommentRepository