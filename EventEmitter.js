
// we listen for events and then when we see an event happen we execute the designated response/function for it

// on -> listen for an event
// emit -> emit an event

const EventEmitter = require('events');

const customEmitter = new EventEmitter();
customEmitter.on('response', (name, id) => {
    console.log(`This is the first event emitter brush off with me. My name is ${name} and my id is:${id}`);
})
customEmitter.on('response', (name, id) => {
    console.log(`This is also to inform that ${name} with id: ${id} is the greatest of all times`)
})
customEmitter.emit('response', 'shafin', 69);