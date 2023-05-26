class HomeController {
    async index(req, res){
        return res.send({ message: 'Home controller !'})
    }
}
module.exports = new HomeController();