'use strict';

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
      if (actor.length > 1)
      {
        for (var act in this.actorsCast)
        {
          this.actorsCast.push(actor);
				  console.log(this.actorsCast);
        }
 		  }
      else 
      {
        this.actorsCast = push(actor);
        console.log(this.actorsCast);
      }
   	}
}	

export default Movie;