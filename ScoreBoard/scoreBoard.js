//ScoreBoard model
var ScoreBoard = (function () {
	
	var participants = {},
		beerCount = 0;

	/**
	 * Holds participant data
	 * @param {String} name
	 */
	function Participant (name) {
		this.name = name;
		this.scores = 0;
		this.beers = 0;
	}

	/**
	 * Adds pariticipant to the scoreboard
	 * @param {String} name
	 */
	function addParticipant (name) {
		participants[name] = new Participant(name);

	}

	/**
	 * Increment participant points
	 * @param  {String} participantName
	 * @param  {Number} points
	 * @return {Void}
	 */
	function givePoints (participantName, points) {
		participants[participantName].scores += points;
		var beersToAdd;

		if(participants[participantName].scores >= 100) {

			beersToAdd = parseInt(participants[participantName].scores / 100, 10);

			participants[participantName].scores = participants[participantName].scores - (beersToAdd * 100);
			
			participants[participantName].beers += beersToAdd;
			
			beerCount += beersToAdd;
			console.log(beersToAdd + ' Beers goes to ' + participantName);
		}

		return participants[participantName];
	}

	function listScore () {
		//Name -> Beers
		for(var name in participants){
			console.log(participants[name].name + ' Points: ' + participants[name].scores + ' Beers: ' + participants[name].beers);
		}
	}

	var publicApi = {
		addParticipant: addParticipant,
		givePoints: givePoints,
		listScore: listScore,
		beersGiven: function () {

			return beerCount;
		}
	};

	return publicApi;
})();