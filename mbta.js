// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

/*
startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);
*/

// Create a array for each line
var lines = {
  'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
  'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};

function stopsOnOneLine(line, start, end) {
  return Math.abs(lines[line].indexOf(start) - lines[line].indexOf(end));
}

function trip(startLine, startStation, endLine, endStation) {
  var stops = 0;
  if (startLine === endLine) {
    stops = stopsOnOneLine(startLine, startStation, endStation);
  } else {
    stops = stopsOnOneLine(startLine, startStation, 'park st') +
          stopsOnOneLine(endLine, endStation, 'park st');
  }
  return stops;
}


console.log("Stops: " + trip('green', 'copley', 'orange', 'forest hills'));






