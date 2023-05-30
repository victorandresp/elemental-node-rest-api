class NotFoundMiddleware {
    async index(req, res){
        return res.status(404).send({ message: 'Route not found!'})
    }
}
module.exports = new NotFoundMiddleware();