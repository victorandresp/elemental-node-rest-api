const { Router } = require("express")

module.exports = function({ CommentController }){
    const router = Router();

    router.get("/:ideaId/idea", CommentController.getIdeaComments);
    router.get("/:commentId", CommentController.get);
    router.post("/:ideaId", CommentController.create);
    router.patch("/:commentId", CommentController.update);
    router.delete("/:commentId", CommentController.delete);
    

    return router;
}