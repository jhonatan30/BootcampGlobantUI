'use strict';

export default class EventEmitter{
	constructor(){
	
		this.listEvetnListener=[];
	
	}	
	
	on(event,callback){
		this.listEvetnListener[event]= callback;
		//console.log(this.listEvetnListener, callback);
	}
		emit(event,callback){
		callback=this.listEvetnListener[event];
		callback(event);
		//console.log("emit from class EventEmmiter");
	}
	off(event){
		console.log(event);
		//console.log("off from class EventEmmiter");
	}
}