"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Social = {
	share: function share(friendName) {
		this.friendName = friendName;
		console.log("Share " + this.title + " with " + this.friendName);
	},

	like: function like(friendName) {
		this.friendName = friendName;
		console.log(this.title + " like " + this.friendName);
	}
};

exports.default = Social;