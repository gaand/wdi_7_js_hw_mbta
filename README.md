#Title: MBTA Homework, JavaScript!

## Objectives:
- Practice with array operations, intersections, etc., and working with arrays and properties of an object literal.

## Activity:

- Create a program that models a simple subway system.
- The program takes the line and stop that a user is getting on at and the line
and stop that user is getting off at and **prints the total number of stops for the trip**.
- There are 3 subway lines:
  - The Red line has the following stops: south station, park st, kendall, central, harvard, porter, davis, alewife
  - The Green line has the following stops: haymarket, government center, park st, bolyston, arlington, copley 
  - The Orange line has the following stops:  north station, haymarket, park st, state, downtown crossing, chinatown, back bay, forest hills
  - All 3 subway lines intersect at *park st*, but there are no other intersection points. Some of this MBTA is fictionalized. Haymarket does not connect the orange/green lines.

### Hints:

* Assume good user input. Don't do lots of checking to ensure good input
* Write all methods as functionally as possible. Separate your input, output and calculation. Attempt to not overwrite variables when possible. Write *many* methods.
* You should be able to try to calculate the distance in your code without user input, but in the end we'll want user input.
* You need to prompt the user for *four* pieces of input data.
* Don't capture the user in a `while` loop. Let the program exit after one calculation.
* Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
* Make subway lines are properties in an object literal, while the values are an array of all the stops on each line.
* The key to the lab is to find the __intersection__ of the lines at *park st*.
* Make sure the stops that are the same for different lines have different names (i.e. Orange/Haymarket and Green/Haymarket need to be differentiated)
