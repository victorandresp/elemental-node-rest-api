const { default: mongoose } = require('mongoose');

const { getBreakingNew } = require("./jobs/breakingNews.job")

require('dotenv').config();

mongoose.connect(process.env.MONGO_ATLAS_URI, { useNewUrlParser: true}
    ).then(() => {
        console.log("mongodb is connected");
        getBreakingNew();
        // const Cat = mongoose.model("Cat", {name: String })
        // Cat.find().then(console.log)
    })

