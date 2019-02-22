var BerlinClock = {	
	tick: function(){
		var time = new Date(),
			second = time.getSeconds();
			hours = time.getHours();
			minutes = time.getMinutes();
		BerlinClock.reset();
		BerlinClock.updateSeconds(second);
		BerlinClock.updateHours(hours);
		BerlinClock.updateMinutes(minutes);
		BerlinClock.updateClock(hours, minutes, second);
	},
	updateSeconds: function(second){
		{ if (second %2 == 1)
			return $(".ticker","#seconds").addClass("yellow");
		};
	},
	updateHours: function(hours){
		var fiveHours = Math.floor(hours / 5);
			for(i=1;i<=fiveHours;i++){
				//$("#hoursOfFive div:lt(" + Math.floor(minutes/5) + "), #minutesOfOne div:lt(" + (minutes/)")
				$(".ticker:nth-child("+i+")", "#hoursOfFive").addClass("red");
			};
		var oneHour = Math.floor(hours - (fiveHours * 5));
			for(i=1;i<=oneHour;i++){
				$(".ticker:nth-child("+i+")", "#hoursOfOne").addClass("red");
			};
	},
	updateMinutes: function(minutes){
		var minutesOfFive = Math.floor(minutes / 5)
		for(i=1;i<=minutesOfFive;i++){
			$(".ticker:nth-child("+i+")", "#minutesOfFive").addClass("yellow");
			if(i % 3 == 0){
				$(".ticker:nth-child("+i+")", "#minutesOfFive").addClass("red");
			}
		};
		var minutesOfOne = Math.floor(minutes - (minutesOfFive * 5))
		for(i=1;i<=minutesOfOne;i++){
			$(".ticker:nth-child("+i+")", "#minutesOfOne").addClass("yellow");
		};
	},
	updateClock: function(hours, minutes, second){
		$("#clock").text(hours + ":" + ((minutes < 10) ? "0" + minutes:minutes) + ":"+ ((second < 10 ? "0" + second:second)));
	},
	reset: function(){
		$(".red, .yellow").removeClass("red").removeClass("yellow");
	}
}