import * as d3 from 'd3';

// Before beginning this exercises, run 'npm start' to launch the demo server

/*
  After this first exercises, let's try to build a bar chart, a simple one:
    - HTML markup :
      <div id="demo-join-and-update-pattern-simple-bar-chart">
        <button id="add-data">Add</button>
        <button id="update-data">Update</button>
        <button id="delete-data">Delete</button>
      </div>
    - <div></div> --> A div stands for a bar, his width is equal to the value bounded to him
    - Data shape is that will be bound:

      const data = [
        {
          label: 1,
          value: 200
        },
        {
          label: 2,
          value: 100
        },
      ];
    - Each button has a action to perform based on a event, see below to more info

 */

const MIN_VALUE = 100;
const MAX_VALUE = 300;

export let data = [
  {
    label: 'label 250',
    value: 250
  },
  {
    label: 'label 100',
    value: 100
  }
];

/**
 * Select the element with demo-join-and-update-pattern-simple-bar-chart id;
 */
export const container = d3.select(
  '#demo-join-and-update-pattern-simple-bar-chart'
);

/**
 * Select the element with add-data id
 * Listen the hover event
 * Call 'addDataFn' when the hover event is triggered
 */
export const addButton = container.select('#add-data').on('click', addDataFn);

/**
 * Select the element with update-data id
 * Listen the 'click' event
 * Call 'updateDataFn' when the click event is triggered
 */
export const updateButton = container
  .select('#update-data')
  .on('click', updateDataFn);

/**
 * Select the element with delete-data id
 * Listen the mouse out event
 * Call 'deleteDataFn' when the mouse out event is triggered
 */
export const deleteButton = container
  .select('#delete-data')
  .on('click', deleteDataFn);

const div = d3.select('#demo-scale');
/**
 * Will be used to update the drawing based on the data received
 * @param inputs
 */
export const update = inputs => {
  const values = div.selectAll('div').data(inputs);

  /*
   *  During exit phase, div not bound anymore are removed after
   *  - a background-color update to red
   *  - transition
   *  - delay of 1000 after the transition
   *
   */
  values
    .exit()
    .style('background-color', '#ff000')
    .transition()
    .delay(1000)
    .remove();

  /**
   * During update phase, div have
   *  - background-color of #3273dc
   *  - margin-top of 10px
   *  - width equal to his data value
   *  - height of 20px
   *  - innerText equal to his data label
   */
  values
    .style('background-color', '#8eb3dc')
    .style('margin-top', '10px')
    .style('width', d => d.value + 'px')
    .style('height', '20px')
    .text(function(d) {
      return d.label;
    });

  /*
   *  During creation phase, div have
   *  - class of new
   *  - background-color of teal
   *  - margin-top of 10px
   *  - width equal to his data value
   *  - height of 20px
   *  - innerText equal to his data label
   */
  values
    .enter()
    .append('div')
    .classed('new', true)
    .style('background-color', '#00e4e4')
    .style('margin-top', '10px')
    .style('width', d => d.value + 'px')
    .style('height', '20px')
    .text(d => d.label);
};

export const start = () => {
  // First launch
  update(data);
};

function addDataFn() {
  const value = Math.floor(Math.random() * MAX_VALUE) + MIN_VALUE;
  data = [
    ...data,
    {
      label: `label ${value}`,
      value
    }
  ].sort((a, b) => a.value > b.value);

  update(data);
}

function updateDataFn() {
  const index = Math.floor(Math.random() * data.length);
  const value = Math.floor(Math.random() * MAX_VALUE) + MIN_VALUE;
  const copy = data.slice();

  copy[index] = {
    ...copy[index],
    value
  };

  data = copy.sort((a, b) => a.value > b.value);

  update(data);
}

function deleteDataFn() {
  const index = Math.floor(Math.random() * data.length);
  data = data.filter((val, i) => i !== index);

  update(data);
}
