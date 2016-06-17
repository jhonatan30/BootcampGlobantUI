'use strict';

class EventEmitter{
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
	class Movie extends EventEmitter{
	constructor(title, year, duration) {
		//Assing properties
  		super();
		this.title = title;
		this.year = year;
		this.duration = duration;
   	}
	    play() {
   		this.emit('play');
        //console.log('Play movie ' + this.title);
    }
    
    pause() {
   		this.emit('pause');
       	//console.log('Pause movie ' + this.title);
   	}
    
    resume() {
   		this.emit('resume');
       	//console.log('Resume movie ' + this.title);
   	}
}								

class Logger{
	constructor(){
		
	}
	log(info)
	{
		console.log('The \'' + info + '\' event has been emitted');
	}
}


let Social = {
	share : function (friendName){
		this.friendName = friendName;
		console.log(`Share ${this.title} with ${this.friendName}`);
	},

	like : function (friendName){
		this.friendName = friendName;
		console.log(`${this.title} like ${this.friendName}`);
	}
}



let terminator = new Movie('Terminator', 1984, 90);
let logger = new Logger();
terminator.on('play', logger.log);
terminator.play();

let ironMan = new Movie('Iron Man', 2008, 126)
ironMan = Object.assign(ironMan, Social);

ironMan.share('Mike Blossom');
