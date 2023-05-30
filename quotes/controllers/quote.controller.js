class QuoteController {
    async index(req, res){
        return res.send({ message: 'Quote controller !'})
    }
}
module.exports = new QuoteController();