// Selections are at the heart of D3.
// So much so that it's impossible to use D3 without them.

/**
 * Select a div using document.querySelector
 */
export const querySelectDiv = () => {
  return document.querySelector('div')
};

/**
 * Select the div with demo-selection id using document.querySelector
 */
export const querySelectDivWithDemoSelectionId = () => {
  return document.querySelector('div#demo-selection')
};

/**
 * Select an element with the "sample" class name
 */
export const querySelectElementWithSampleClassName = () => {
  return document.querySelector('.sample')
};

/**
 * Get the first <p> element  where the parent is a <div id="demo-selection"> element
 */
export const querySelectFirstPElement = () => {
  return document.querySelector('div#demo-selection > p')
};

/**
 * Get all <p> elements in the document
 */
export const querySelectAllP = () => {
  return document.querySelectorAll('p')
};

/**
 * Get all elements with .sample
 */
export const querySelectAllElementWithSampleClassName = () => {
  return document.querySelectorAll('.sample')
};

//=======================================================

// Let's do the same using d3 now

/**
 * Select a div using d3.select
 */
export const selectDiv = d3 => {
  return d3.select('div')
};

/**
 * Select the div with demo-selection id using d3.select
 */
export const selectDivWithDemoSelectionId = d3 => {
  return d3.select('div#demo-selection')
};

/**
 * Select an element with the "sample" class name
 */
export const selectElementWithSampleClassName = d3 => {
  return d3.select('.sample')
};

/**
 * Get the first <p> element  where the parent is a <div id="demo-selection"> element
 */
export const selectFirstPElement = d3 => {
  return d3.select('div#demo-selection > p')
};

/**
 * Get all <p> elements in the document
 */
export const selectAllP = d3 => {
  return d3.selectAll('p')
};

/**
 * Get all elements with .sample
 */
export const selectAllElementWithSampleClassName = d3 => {
  return d3.selectAll('.sample')
};

// Summary

/*
  If you want to select	              One Item	        Multiple Items
  Anywhere on the page	              d3.select	        d3.selectAll
  Within an existing selection	      selection.select	selection.selectAll
 */
