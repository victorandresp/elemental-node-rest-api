const path = require("path")
const DB_PATH = path.join(`${__dirname}/../data/db.json`)
const db = require(DB_PATH)

class QuoteController {
    async get(req, res){
        console.log('calleddd');
        return res.status(200).send(db)
    }
    async getOne(req, res){
        console.log("req", req);
        return res.send({ message: 'Quote controller !'})
    }
    async add(req, res){
        return res.send({ message: 'Quote controller !'})
    }

}
module.exports = new QuoteController();