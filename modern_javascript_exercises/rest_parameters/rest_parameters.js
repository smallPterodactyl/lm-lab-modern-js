
export function add (numOne, numTwo, ... otherNums) {
 
return ([numOne, numTwo, ... otherNums].reduce((sumNums, currentNum) => sumNums + currentNum));

}


