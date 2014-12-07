var timeRemaining = require('./getRemainingTime.js');


console.log(timeRemaining);
var time = timeRemaining.getTimeRemaining(23624).then(function(time){
	console.log('Time shown:' + time);
});
