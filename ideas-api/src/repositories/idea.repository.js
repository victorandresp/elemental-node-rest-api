const BaseReporsitory = require("./base.repository")

let _idea = null

class IdeaRepository extends BaseReporsitory{ 
    constructor({ Idea }){
        super(Idea)
        _idea = Idea
    }

    async getUserIdeas(author){
        return _idea.find({ author })
    }
}

module.exports = IdeaRepository