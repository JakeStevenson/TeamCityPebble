var timeRemaining = require('./getRemainingTime');


var time = timeRemaining.getTimeRemaining(23624).then(function(time){
	console.log('Time shown:' + time);
});
