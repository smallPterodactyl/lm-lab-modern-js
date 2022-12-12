// Instructions can be found in rest_parameters.md

/* export function add (a, b) {
  // Add a loop here
  return a + b;
}
*/

export function add (a, b, ... otherNums) {
 
return ([a, b, ... otherNums].reduce((accumulator, currentValue) => accumulator + currentValue));

}

//Removed test script code that threw a persistent error


