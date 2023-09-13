if(process.env.NODE_ENV){
    require("dotenv").config();
}

module.exports = { 
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME
}