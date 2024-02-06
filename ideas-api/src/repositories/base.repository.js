class BaseReporsitory { 
    constructor(){
        this.model = model
    }

    async get(id){
        await this.model.findById(id)
    }

    async getAll(){
        await this.model.find()
    }
    async create(entity){
        return await this.model.create(entity)
    }
    async update(id, entity){
        await this.model.findByIdAndUpdate(id, entity, {new: true})
    }
    async delete(id){
        await this.model.findByIdAndDelete(id)
    }
}

module.exports = BaseReporsitory