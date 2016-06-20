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
		this.actorsCast = [];
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

   	addCast( actor )
   	{
   		if (actor.length > 1) {
			
			for (var act in this.actorsCast)
			{
				this.actorsCast.push(actor);
				console.log(this.actorsCast);
			}
 		}
 		else {
 			this.actorsCast = push(actor);
 			console.log(this.actorsCast);
 		}
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

class Actor{
	constructor(name,age,role){
		this.name = name;
		this.age = age;
		this.role = role;
	}	
}


let avengers = new Movie('The Avengers', 2010, 120);
let robert = new Actor('Robert Downey Jr', 51, 'Tony Stark');

let otherCast = [
 new Actor('Scarlett Johansson', 31,'Natasha Romanoff/Black Widow'),
 new Actor('Chris Evans', 35, 'Captain America'),
 new Actor('Mark Ruffalo', 48, 'Hulk')
];

avengers.addCast(robert);
avengers.addCast(otherCast);

avengers.on('play', logger.log);
avengers.play();

avengers = Object.assign(avengers, Social);

avengers.share('Mike Blossom');
