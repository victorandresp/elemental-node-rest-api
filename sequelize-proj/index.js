const { CRUD } = require("./helpers")
const db = require("./models")

const params = process.argv // arguments of command

if(params.length <= 2){
    process.exit(0)
}

const args = params.slice(2)
const command = args[0].split(":")[0].substring(2);
const entity = args[0].split(":")[1];

switch (command) {
    case CRUD.CREATE:
        const data = {}
        args.slice(1).forEach(arg => {
            const tmp = arg.split("=")
            data[tmp[0].substring(2)] = tmp[1]
        })

        db[entity].create(data)
        .then(() => console.log('Contact created !'))
        .catch(console.log);

        break;
    case CRUD.READ:
         db[entity].findAll()
        .then(console.log)
        .catch(console.log);
    default:
        console.log("Operation not found")
        break;
}

// COMMANDS
// yarn dev:sequelize --create:Contact --firstname="Test" --lastname="test" --phone="33333333" --email="test@email.com"