// Instructions can be found in destructuring_arrays.md

/*export function sequence(order) {

  const first = order[0];
  const second = order[1];
  const third = order[2];

  return first + ", " + second + ", " + third;
} */

/*
 * Let's assume that 'ordering' means: returning the sequence in the same
 * order as it was passed in; only ordering 3 units; only ordering strings!
 * 
 */ 

export function sequence(order) {

  let [a, b, c, ... rest] = order;

  return (`${a}, ${b}, ${c}`);

}