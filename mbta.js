// Code here.
var startingLine,
startingStation,
endingLine,
endingStation,
findDistance,
numStops;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create an object literal where each property 
// is an Array of stations.
lines = {
  green: ['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
  red: ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  orange: ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};

// function that calculates all the distances once and only once.
// returns a function that uses the result of this calculation to
// find distances
var calcDistances= function(lines){
  var distances = {}, 
  stationDistance,
  stationNum,
  stationDistance = function(stationNum, stations){
   return Math.abs(stationNum - stations.indexOf('park st'));
  },
  toParkSt = function(lineName, station){
    // get the station index within one line
    var stationIndex = lines[lineName].indexOf(station);
    // uses the precalculated distances between all stations.
    return distances[lineName][stationIndex]
  },
  findDistances = function(startingLine, startingStation, endingLine, endingStation){
    var startToPark, endToPark;
    // starting stop to park st. 
    startToPark = toParkSt(startingLine, startingStation);
    // ending stop to park st.     
    endToPark = toParkSt(endingLine, endingStation);
    return (startToPark + endToPark)
  };

  // calculate all the distances btw stops, for all lines
  for(lineName in lines){
    distances[lineName] = [];
    lineStations = lines[lineName];
    for(stationNum = 0; stationNum < lineStations.length; stationNum++){
      distances[lineName].push(stationDistance(stationNum,lineStations));
    }
  }
  console.log('All distances calculated');

  // function that uses calculated distances btw stops.
  return findDistances;

};

var findDistance = calcDistances(lines);
var numStops = findDistance(startingLine, startingStation, endingLine, endingStation);
alert('There are ' + numStops + ' from ' + startingLine + ':' + startingStation + ' to ' + endingLine + ':' + endingStation);

// console.log("Number of stops from alewife to south station is " + findDistance('red', 'alewife', 'red', 'south station'));
// console.log("Number of stops from alewifconsole.log("Number of stops from alewife to haymarket is " + findDistance('red', 'alewife', 'green', 'haymarket'));
