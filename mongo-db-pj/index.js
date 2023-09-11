const { default: mongoose } = require('mongoose');

const { getBreakingNew } = require("./jobs/breakingNews.job")

require('dotenv').config();

mongoose.connect(process.env.MONGO_ATLAS_URI, { useNewUrlParser: true}
    ).then(() => {
        console.log("mongodb is connected");
        getBreakingNew(); // CronJob for obtain notices by Scrapping
        const Cat = mongoose.model("Cat", {name: String })
        Cat.find().then(console.log) 
    })

