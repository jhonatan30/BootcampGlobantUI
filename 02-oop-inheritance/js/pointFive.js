window.onload = function () 
{
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

	let btnOption = document.getElementById('done');
	btnOption.onclick = done;

	let newMovie, str, logger;
	let a = 1;
	let statusCreation = document.getElementById("creation-movie");

	function done(){
		
		let option = document.getElementById("input-option");

		if (a==1) {
			str = option.value.substring(4,option.value.length); //taken from the input from position 4
			eval(str); //run code JS taken from input
			statusCreation.innerHTML = ("Movie " + newMovie.title + " was created.");
			document.getElementById("step-one").style.backgroundColor="#ADFFE5";
			a = 2;

		}else if (a == 2){
			str = option.value.substring(4,option.value.length); //taken from the input from position 4
			eval(str); //run code JS taken from input
			document.getElementById("step-two").style.background="#ADFFE5";
			a = 3;
		}else if(a == 3){
			str = option.value;  //taken all string from de input
			eval(str);
			document.getElementById("step-three").style.background="#ADFFE5";
			a = 4;
		}else {
			str = option.value;  //taken all string from de input
			eval(str);
			document.getElementById("step-four").style.background="#ADFFE5";
			statusCreation.innerHTML = ('The \'' + play + '\' event has been emitted');
			a = 1;
		}
	}
}






