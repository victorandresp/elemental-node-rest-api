const  { createContainer, asClass, asValue, asFunction } = require("awilix")

//services
const { HomeService } = require("../services");

//controller
const { HomeController } = require("../controllers");


const container = createContainer();

// controllers
container
    .register({
        HomeService: asClass(HomeService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    })


module.exports = container