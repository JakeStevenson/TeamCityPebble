var Q = require('q');
var _ = require('underscore');
var parseString = require('xml2js').parseString;

console.log("Loaded getTimeRemaining");

var timeChecker = exports;
timeChecker.getTimeRemaining = function(buildId){
		//Sample of AJAX request that'll give us times remaining for current builds -- /ajax.html?getRunningBuilds=1
		var sampleXML = ' <response><build buildId="23624" buildTypeId="bt2" text="build.proj.teamcity" successful="true" buildTypeSuccessful="true" showAsExceeded="false" showOvertimedIcon="false" showTimeLeft="true" totalEstimate="20m:58s" remainingTime="16m:02s" exceededEstimatedDurationTime="&lt; 1s" elapsedTime="5m:34s" completedPercent="26" hasArtifacts="false" /></response>';

		var deferred = Q.defer();
		parseString(sampleXML, function (err, result) {
			JSON.stringify(result);
			_.map(result.response.build, function(individual){
				var id = parseInt(individual.$.buildId);
				if(id === buildId){
					result =  individual.$.remainingTime;}
					return deferred.resolve(result);
				});
			});
			return deferred.promise;
		};
