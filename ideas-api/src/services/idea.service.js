const BaseService = require("./base.service")
let _ideaRepository = null

class IdeaService extends BaseService {
    constructor({ IdeaRepository }){
        super(IdeaRepository)
        _ideaRepository = IdeaRepository
    }
    async getUserIdeas(author){
        if(!author){
            ThrowHttpError(400, "userId must be sent")
        }

        return await _ideaRepository.getUserIdeas(username)
    }

    async upvoteIdea(ideaId){
        if(!ideaId){
            ThrowHttpError(400, "idIdea must be sent")
        }

        const idea = await _ideaRepository.get(ideaId)
        
        if(!idea){
            ThrowHttpError(404, "idea not found")
        }
        
        idea.upvotes.push(true)
        return await _ideaRepository.update(ideaId, { upvotes: idea.upvotes })
    }

    async downvoteIdea(ideaId){
        if(!ideaId){
            ThrowHttpError(400, "idIdea must be sent")
        }

        const idea = await _ideaRepository.get(ideaId)
        
        if(!idea){
            ThrowHttpError(404, "idea not found")
        }
        
        idea.downvotes.push(true)
        return await _ideaRepository.update(ideaId, { downvotes: idea.downvotes })
    }

}

module.exports = IdeaService