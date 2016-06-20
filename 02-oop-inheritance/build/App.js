'use strict';

var _EventEmitter = require('./EventEmitter.js');

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _Actor = require('./Actor.js');

var _Actor2 = _interopRequireDefault(_Actor);

var _Logger = require('./Logger.js');

var _Logger2 = _interopRequireDefault(_Logger);

var _Movie = require('./Movie.js');

var _Movie2 = _interopRequireDefault(_Movie);

var _Social = require('./Social.js|');

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var avengers = new _Movie2.default('The Avengers', 2010, 120);
var robert = new _Actor2.default('Robert Downey Jr', 51, 'Tony Stark');

var otherCast = [new _Actor2.default('Scarlett Johansson', 31, 'Natasha Romanoff/Black Widow'), new _Actor2.default('Chris Evans', 35, 'Captain America'), new _Actor2.default('Mark Ruffalo', 48, 'Hulk')];

avengers.addCast(robert);
avengers.addCast(otherCast);

avengers.on('play', logger.log);
avengers.play();

avengers = Object.assign(avengers, _Social2.default);

avengers.share('Mike Blossom');