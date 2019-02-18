/********* NODE EVENT-EMITTER **********/

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/********* SERVICE OBJECT **********/

const awEventEmitter = {

	eventEmitter: eventEmitter,

	emit: function(eventStr) {
		eventStr && this.eventEmitter.emit(eventStr);
	},

	on: function(eventStr, callback) {
		eventStr && callback && this.eventEmitter.on(eventStr, callback);
	}

};

export default Object.freeze(awEventEmitter);