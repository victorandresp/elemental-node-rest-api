const Emitter = require('./emitter.js')

const emitter = new Emitter()

emitter.on('save', () =>{
    console.log('saved is called');
})

emitter.emit('save')

