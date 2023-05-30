const path = require("path")
const DB_PATH = path.join(`${__dirname}/../data/db.json`)
const db = require(DB_PATH)

class QuoteController {
    async get(req, res){
        console.log('calleddd');
        return res.status(200).send(db)
    }
    async getOne(req, res){
        const { id } = req.params
        console.log('id', typeof id);
        const quoteGetted = db.find(q => q.id === parseInt(id))
        if(!quoteGetted){
            return res.status(404).send({ message: 'Quote not found !'})
        }
        return res.status(200).send(quoteGetted)
    }
    async add(req, res){
        return res.send({ message: 'Quote controller !'})
    }

}
module.exports = new QuoteController();