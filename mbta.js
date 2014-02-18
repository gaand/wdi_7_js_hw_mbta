// Code here.
var startingLine,
startingStation,
endingLine,
endingStation,
lines,
total_distance,
start_parkst,
end_parkst,
first_stop,
ending_stop;

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


var distance_to_park = function(line) {
	var current_line = lines[line], park = current_line.indexOf('park st');
	return function(stop) {
		var current_stop = current_line.indexOf(stop);
		return Math.abs(current_stop - park);
	}
}
start_parkst = distance_to_park(startingLine);
end_parkst = distance_to_park(endingLine);
first_stop = start_parkst(startingStation);
ending_stop = end_parkst(endingStation);

total_distance = first_stop + ending_stop;

alert("The total number of stops for your travel is " + total_distance + " stops.");
