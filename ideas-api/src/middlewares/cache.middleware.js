const mcache = require("memory-cache")
const { CACHE_KEY } = require("../config")

module.exports = function(duration){
    return (req, res, next) => {
        const key = CACHE_KEY + req.originUrl || req.originUrl
        const cachedBody = mcache.get(key)

        if(cachedBody){
            res.send(JSON.parse(cachedBody))
        }else{
            res.sendResponse = res.send
            res.send = body => {
                mcache.put(key, body, duration * 1000)
                res.sendResponse(body);
            }
            next()
        }
    }
}