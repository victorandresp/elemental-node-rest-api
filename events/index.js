const Emitter = require('./emitter.js') // Own event emitter
const { EventEmitter } = require('events')
const { SAVE, TEST } = require('./event-names') // NodeJs native event emitter

const emitter = new Emitter()  // Own event emitter
const emitterNative = new EventEmitter()  // // NodeJs native event emitter

emitter.on(SAVE, () =>{
    console.log('saved is called from OWN event');
})

emitterNative.on(TEST, () =>{
    console.log('test is called from NATIVE event');
})

emitter.emit(SAVE)
emitterNative.emit(TEST)

