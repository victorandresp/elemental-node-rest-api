const { Router } = require("express")
const { ParseIntMiddleware } = require("../middlewares")

module.exports = function({ IdeaController }){
    const router = Router();

    router.get("", [ParseIntMiddleware], IdeaController.getAll);
    router.get("/:ideaId", IdeaController.get);
    router.post("", IdeaController.create);
    router.patch("/:userId", IdeaController.update);
    router.delete("/:userId", IdeaController.delete);
    router.get("/:userId/all", IdeaController.getUserIdeas)
    router.post("/:ideaId/upvote", IdeaController.upvoteIdea)
    router.post("/:ideaId/downvote", IdeaController.downvoteIdea)

    return router;
}