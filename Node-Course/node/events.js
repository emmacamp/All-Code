const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id:${id}`);
}
);

customEmitter.emit('response', 'john', 34);