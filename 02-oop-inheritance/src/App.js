'use strict'

import EventEmitter from './EventEmitter.js';
import Actor from './Actor.js';
import Logger from './Logger.js';
import Movie from './Movie.js';
import Social from './Social.js|';


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
