'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
	function EventEmitter() {
		_classCallCheck(this, EventEmitter);

		this.listEvetnListener = [];
	}

	_createClass(EventEmitter, [{
		key: 'on',
		value: function on(event, callback) {
			this.listEvetnListener[event] = callback;
			//console.log(this.listEvetnListener, callback);
		}
	}, {
		key: 'emit',
		value: function emit(event, callback) {
			callback = this.listEvetnListener[event];
			callback(event);
			//console.log("emit from class EventEmmiter");
		}
	}, {
		key: 'off',
		value: function off(event) {
			console.log(event);
			//console.log("off from class EventEmmiter");
		}
	}]);

	return EventEmitter;
}();

exports.default = EventEmitter;