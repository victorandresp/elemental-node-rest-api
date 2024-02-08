const BaseService = require("./base.service")
let _commentRepository = null
let _ideaRepository = null

class CommentService extends BaseService {
    constructor({ CommentRepository, IdeaRepository }){
        super(CommentRepository)
        _commentRepository = CommentRepository
        _ideaRepository = IdeaRepository
        
    }
    async getIdeaComments(ideaId){
        if(!ideaId){
            ThrowHttpError(400, "idIdea must be sent")
        }
        const idea = await  _ideaRepository.get(ideaId)

        if(!idea){
            ThrowHttpError(404, "idea not found")
        }

        const { comments } = idea

        return comments
    }

    async createComment(comment, ideaId){
        if(!ideaId){
            ThrowHttpError(400, "idIdea must be sent")
        }
        const idea = await  _ideaRepository.get(ideaId)

        if(!idea){
            ThrowHttpError(404, "idea not found")
        }

        const createdComment = await _commentRepository.create(comment)

        idea.comments.push(createdComment)

        return await _ideaRepository.update(ideaId, { comments: idea.comments })

    }

}

module.exports = CommentService