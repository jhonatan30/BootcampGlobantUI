'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age, role) {
	_classCallCheck(this, Actor);

	this.name = name;
	this.age = age;
	this.role = role;
};

exports.default = Actor;