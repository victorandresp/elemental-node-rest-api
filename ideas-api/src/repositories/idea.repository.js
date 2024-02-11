const BaseRepository = require("./base.repository")

let _idea = null

class IdeaRepository extends BaseRepository{ 
    constructor({ Idea }){
        super(Idea)
        _idea = Idea
    }

    async getUserIdeas(author){
        return _idea.findOne({ author })
    }
}

module.exports = IdeaRepository