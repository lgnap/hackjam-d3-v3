// Import d3 from d3
import d3 from 'd3';

/**
 * Create a function called getD3 that returns the imported d3
 * Make this function visible outside of the module
 */

export function getD3() {
  return d3;
}

/**
 * Create a function that will receive in parameter a d3 object and return
 * a function taht will return the d3 object
 * Function name is : functionThatReturnsFunction
 */
export function functionThatReturnsFunction(d3obj) {
  return function() {
    return d3obj;
  };
}
