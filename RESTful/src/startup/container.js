const { createContainer, asClass, asValue, asFunction } = require("awilix");

//services
const { HomeService } = require("../services")

// controllers 
const { HomeController } = require("../controllers")

const container = createContainer();

container.register({
    HomeService: asClass(HomeService).singleton()
})
.register({
    HomeController: asClass(HomeService).bind(HomeController).singleton()
})

module.exports = container