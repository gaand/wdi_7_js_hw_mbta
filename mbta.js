/*
  Single Var Pattern:

  Provides a single place to look for all the local variables
  needed by the function
  
  Prevents logical errors when a variable is used before it’s 
  defined (see “Hoisting: A Problem with Scattered vars” on 
  page 14 of 'Javascript Patterns')
  
  Helps you remember to declare variables and therefore minimize
  globals
  
  Is less code (to type and to transfer over the wire)
*/
var startingLine,
  startingStation,
  endingLine,
  endingStation,
  findDistance,
  numStops,
  enterStations = function(){
    var allLines = '['+ Object.keys(lines).join('|') + ']',
    allStations;

    // Get the starting and ending stations
    // Remove leading and trailing whitespace with String.trim;
    do{
      startingLine = prompt("Enter the Starting Line" + allLines).trim();
    }while(lines[startingLine] === undefined)

    allStations = '[' + lines[startingLine].join('|') + ']';
    do{
      startingStation = prompt("Enter the Starting Station" + allStations).trim();
    }while(lines[startingLine].indexOf(startingStation) === -1)


    do{  
      endingLine = prompt("Enter the Ending Line"+ allLines).trim();
    }while(lines[endingLine] === undefined)

    allStations = '[' + lines[endingLine].join('|') + ']';
    do{
      endingStation =  prompt("Enter the Ending Station" + allStations).trim();
    }while(lines[endingLine].indexOf(endingStation) === -1)

    // alert("Staring at " + startingLine + " : " + startingStation);
    // alert("Ending at " + endingLine + " : " + endingStation);
  },
  showNumStops = function(numberOfStops){
    var msg = 'There are ' + numStops;
    msg += ' from ' + startingLine + ':' + startingStation;
    msg += ' to ' + endingLine + ':' + endingStation; 
    alert(msg);
  };

// Create an object literal where each property represents
// all the stations on that line.
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
// This will have calculated all of the distances btw stations
// and return a function, findDistance, that will have
// used the cached value of these calculated distances.
findDistance = calcDistances(lines);

// Keep entering stations until done.
do{
  enterStations();
  // Here is were we reap the benefits of pre-calculating
  // all the distances.
  numStops = findDistance(startingLine, startingStation, endingLine, endingStation);
  showNumStops(numStops);
  done = prompt("Enter more routes?[y|Y]").trim().toLowerCase();
}while(done === 'y')

// Debugging

// Should be 6 stops from alewife to south station on the red line
// console.log("Number of stops from alewife to south station is " + findDistance('red', 'alewife', 'red', 'south station'));

// Should be 8 stops from alewife to haymarket on the green line.
// console.log("Number of stops from alewifconsole.log("Number of stops from alewife to haymarket is " + findDistance('red', 'alewife', 'green', 'haymarket'));
