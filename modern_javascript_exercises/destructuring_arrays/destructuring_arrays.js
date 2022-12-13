// Instructions can be found in destructuring_arrays.md

/*
 * Assume'ordering' means: returning the sequence in the same
 * order as it was passed in; only ordering 3 units; only ordering strings!
 * 
 */ 

export function sequence(order) {

  const [first, second, third, ... rest] = order;

  return `${third}, ${second}, ${third}`;

}