function Movie (title, year, duration) 
{
	//Assing properties
	this.title = title;
	this.year = year;
	this.duration = duration;

	//Assing methods
	this.play = play;
	this.pause = pause;
	this.resume = resume;
}

function play() 
{
	 console.log('Play movie ' + this.title);
}

function pause() 
{
	 console.log('Pause movie ' + this.title);
}


function resume() 
{
	 console.log('Resume movie ' + this.title);
}






