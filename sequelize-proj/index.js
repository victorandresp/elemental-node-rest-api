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
    case CRUD.UPDATE:
        const updateData = {}
        const id = parseInt(args[1].split("=")[1])

        args.slice(1).forEach(arg => {
            const tmp = arg.split("=")
            updateData[tmp[0].substring(2)] = tmp[1]
        })
        db[entity].update(updateData, {
            where:{
                id: id
            }
        }).then(console.log('Updated Successfully'))
        .catch(console.log)
    default:
        console.log("Operation not found")
        break;
}

// COMMANDS
// #CREATE
// yarn dev:sequelize --create:Contact --firstname="Test2" --lastname="test2" --phone="44444444" --email="test2@email.com"
// #READ
// yarn dev:sequelize --read:Contact