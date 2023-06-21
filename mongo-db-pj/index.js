const { default: mongoose } = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_ATLAS_URI, { useNewUrlParser: true}
    ).then(() => {
        console.log("mongodb is connected");
        const Cat = mongoose.model("Cat", {name: String })
        Cat.find().then(console.log)
    })

