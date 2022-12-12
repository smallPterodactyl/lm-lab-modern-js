// Instructions can be found in default_parameters.md

/* template literal solution */
/*export const sayHello = (person) => {
  return `Hello, ${person === undefined ? "you!" : person + "!"}`;
};
*/

/* Now with default parameters*/
export const sayHello = (person = 'you') => {

  return `Hello, ${person}!`

};

