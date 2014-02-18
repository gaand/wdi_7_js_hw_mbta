// Code here.
var startingLine,
startingStation,
endingLine,
endingStation,
lines,
total_distance;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
lines = {
  'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
  'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};

var distance_to_park = function(line, stop) {
	var current_line = lines[line];
	current_stop = current_line.indexOf(stop);
	park = current_line.indexOf('park st');
	return Math.abs(current_stop - park);
}

total_distance = distance_to_park(startingLine, startingStation) + distance_to_park(endingLine, endingStation);

alert("The total number of stops for your travel is " + total_distance + " stops.");
