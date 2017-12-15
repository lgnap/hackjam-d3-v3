import * as d3 from 'd3';

// Before beginning this exercices, run 'npm start' to launch the demo server
// and navigate to

const numbers = new Array(10).fill(0).map((val, i) => i);

const updateNumbers = (arrayNumbers = []) => {
  const start = Math.floor(Math.random() * 10) + 1;
  const end = Math.floor(Math.random() * 10) + 3;
  if (start > end) {
    return arrayNumbers.slice(end, start).sort((a, b) => a > b);
  }
  return arrayNumbers.slice(start, end).sort((a, b) => a > b);
};

/**
 * Transition that will used to make animation
 */
const updateTransition = d3.transition().duration(1750);
const enterTransition = d3.transition().duration(1250);
const exitDuration = d3.transition().duration(750);
const updateAndEnterTransition = d3.transition().duration(2000);

/**
 * Select the element with demo-join-and-update-pattern id;
 */
export const container = d3.select('#demo-join-and-update-pattern');

export const width = 400;
export const height = 200;

/**
 * From the container select the "svg", update his width and height, add the id = root
 */
export const svg = container
  .select('svg')
  .attr('width', width)
  .attr('height', height)
  .attr('id', 'root');

/**
 * Append to the svg a "g" element and add a "transform" attribute with
 * the following value : `translate(45,${height / 2})`
 */
export const g = svg
  .append('g')
  .attr('transform', `translate(45,${height / 2})`);

/**
 * Will be used to update the drawing based on the data received
 * @param inputs
 */
export const update = inputs => {
  /**
   * From 'g' variable, select all 'text' elements and "join" each array element to each
   * element of the selection
   */
  const text = g.selectAll('text').data(inputs);

  /**
   * Get the 'exit' selection, then
   * - apply the 'fill' style to 'red'
   * - update his 'y' attribute to 60
   * - set his 'class' attribute to 'removed'
   * - remove all elements of his selection
   */
  text
    .exit()
    .style('fill', 'red')
    .attr('y', 60)
    .attr('class', 'removed')
    .remove();

  /**
   * Get the 'update' selection, then
   * - set his 'class' attribute to 'updated'
   * - apply the 'fill' style to 'blue'
   * - update his 'x' attribute with the following value '(d, i) => i * 45'
   */
  text
    .attr('class', 'updated')
    .style('fill', 'blue')
    .attr('x', (d, i) => i * 45);

  /**
   * Get the 'enter' selection, then
   * - set his 'class' attribute to 'new'
   * - append a new 'text' element
   * - apply the 'fill' style to 'green'
   * - set his 'dy' attribute to '.35em'
   * - update his 'x' attribute with the following value '(d, i) => i * 45'
   * - Set his innerText to binded data
   */
  const enter = text
    .enter()
    .append('text')
    .attr('class', 'new')
    .style('fill', 'green')
    .attr('dy', '.35em')
    .attr('x', (d, i) => i * 45)
    .text(function(d) {
      return d;
    });

  /**
   * Get the 'enter' and 'update' selection, then
   * - apply the 'fill' style to 'black'
   * - update his 'x' attribute with the following value '(d, i) => i * 45'
   */
  // enter
  //   .style('fill', 'black')
  //   .attr('x', (d, i) => i * 45)
  // text
  //   .style('fill', 'black')
  //   .attr('x', (d, i) => i * 45)
  // Note when you comment the 'Enter/Update' selection, did you understand what is going on ?
};

export const start = () => {
  // First launch
  update(numbers);

  // Update the display
  setInterval(() => {
    update(updateNumbers(numbers));
  }, 3000);
};

/*
  Next task:

  When you will finish to implement all the comment and have a working version, you can
  perform this series of improvement:

  - On every update, we may see some value duplicated, so update the 'text'
    data join (i.e `const text` variable) to fix it. Hint: key functions
  - Play with transition variables to add some animation. Your test will be broken but don't worry
 */
