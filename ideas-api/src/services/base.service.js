const { ThrowHttpError } = require("../helpers")

class BaseService {
    constructor(repository){
        this.repository = repository
    }

    async get(id){
        if(!id){
            ThrowHttpError(400, "id must be sent")
        }

        const currentEntity = await this.repository.get(id)

        if(!currentEntity){
           ThrowHttpError(404, "entity does not found")
        }

        return currentEntity;
    }

    async getAll(){
        return await this.repository.getAll();
    }

    async create(entity){
        return await this.repository.create(entity);
    }

    async update(id, entity){
        if(!id){
            ThrowHttpError(400, "id must be sent")
        }
        return await this.repository.update(id, entity);
    }

    async delete(id){
        if(!id){
            ThrowHttpError(400, "id must be sent")
        }
        return await this.repository.delete(id);

    }
}

module.exports = BaseService
