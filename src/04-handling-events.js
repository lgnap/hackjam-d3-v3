// For interaction, selections allow listening for and dispatching of events.

/**
 * Listen the click event on all button of <div id="demo-handling-events"
 */
export const listenClickOnAllButtons = (d3, onClickListener) => {
  d3.select('#demo-handling-events').on('click', onClickListener)
};

/**
 * Listen the input event on <input type="text" id="writer"/>
 */
export const listenInputEvent = (d3, inputListener) => {
  d3.select('#writer').on('input', inputListener)
};

/*
  Summary:
*/
