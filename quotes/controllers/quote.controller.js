const path = require("path")
const DB_PATH = path.join(`${__dirname}/../data/db.json`)
const db = require(DB_PATH)
const fs = require("fs")

class QuoteController {
    async get(req, res){
        return res.status(200).send(db)
    }
    async getOne(req, res){
        const { id } = req.params
        const quoteGetted = db.find(q => q.id === parseInt(id))
        if(!quoteGetted){
            return res.status(404).send({ message: 'Quote not found !'})
        }
        return res.status(200).send(quoteGetted)
    }
    async add(req, res){
        try {
            const { body: quote } = req
            const id = db.length
            quote.id = id
            db.push(quote)
            fs.writeFileSync(DB_PATH, JSON.stringify(db))
            return res.status(201).send({ message: `Added new quote with the id: ${id}`})
            
        } catch (error) {
            return res.status(400).send({ message: 'Bad request !'})
        }
    }

}
module.exports = new QuoteController();