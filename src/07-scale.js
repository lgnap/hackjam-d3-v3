/*
  Scale functions are JavaScript functions take an input value and transform (or ‘map’) it to another data values
  Input value are called domain and the return value is named range.
  List of scale :
  - d3.scale.linear : used for transforming data values into positions and lengths such as for bar chart
  - d3.scale.sqrt   : used for sizing circles by area (rather than radius)
  - d3.scale.log    : used when the data has an exponential nature
  - d3.scale.time   : kinds of the same as d3.scale.linear, except that domain values are date values

  Non-exhaustive list
 */

/**
 * Return the linear scale function of d3
 * @param d3
 */
export const getLinearScaleFunction = d3 => {
  return d3.scale.linear();
};

/**
 * Return the linear scale function with
 * - a domain between 0 and 100
 * @param d3
 */
export const getLinearWithDomainSetup = d3 => {
  return d3.scale.linear().domain([0, 100]);
};

/**
 * Return the linear scale function with
 * - a domain between 10 and 1000
 * - a range between 0 and 100
 * @param d3
 */
export const getLinearWithDomainAndRangeSetup = d3 => {
  return d3.scale
    .linear()
    .domain([10, 1000])
    .range([0, 100]);
};

/**
 * Return the linear scale function with
 * - a domain between 10 and 33
 * - a range between 0 and 1
 *
 * /!\ Don't allow input outside the domain
 * @param d3
 */
export const getLinearWithDomainAndRangeSetupAndClamp = d3 => {
  return d3.scale
    .linear()
    .domain([10, 33])
    .range([0, 1])
    .clamp(true);
};

/**
 * Return the domain value of the received scale and input
 */
export const getDomainFromScale = (scale, input) => {
  return scale.invert(input);
};

/**
 * Return the sqrt scale function of d3
 * @param d3
 */
export const getSqrtScaleFunction = d3 => {
  return d3.scale.sqrt();
};

/**
 * Return the sqrt scale function with
 * - a domain between 100 and 1000
 * @param d3
 */
export const getSqrtWithDomainSetup = d3 => {
  return d3.scale.sqrt().domain([100, 1000]);
};

/**
 * Return the sqrt scale function with
 * - a domain between 10 and 1000
 * - a range between 0 and 100
 * @param d3
 */
export const getSqrtWithDomainAndRangeSetup = d3 => {
  return d3.scale
    .sqrt()
    .domain([10, 1000])
    .range([0, 100]);
};

// The same logic apply to all order scales of D3

/*
  Task:
  - Use a scale to update the width calculation of your previous bar chart.
  - Use MIN_VALUE, MAX_VALUE, WIDTH to create your scale
 */
export const fun = () => console.log('Fuuuuuun');
