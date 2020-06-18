// from data.js
var tableData = data

// Selecting where the table will be Built (to be spill)
var tbody = d3.select("tbody");


// !!!
// Below are my attempts at coding the initial display before seeing 
// 01-Lesson-Plans\14-Intro-To-JavaScript\3\Activities\03-Evr_D3_Table
// !!!
//
//--------------------------------------------------------------------------------------
// data.forEach(function(weatherReport) {
//     console.log(weatherReport);
//   });
//--------------------------------------------------------------------------------------
// var when = d3.select("thead").append("tr").append("th");
// when.text(tableData[0].datetime);
// var where = d3.append("th");
// where.text(tableData[0].city);
//--------------------------------------------------------------------------------------
// // This places 1/1/2010 under Date and benton underneath that
// var when = d3.select("tbody").append("tr").append("th");
// when.text(tableData[0].datetime);
// var where = when.append("th");
// where.text(tableData[0].city);
//--------------------------------------------------------------------------------------
//
data.forEach((sightings) => {
    let row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("th");
      cell.text(value);
    });
  });

// Cull list based on date
let button = d3.select("#filter-btn");
let form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);
  

// Shameless copying this code from 
// 01-Lesson-Plans\14-Intro-To-JavaScript\3\Activities\09-Par_Form_Filter
// Though in my defense it doesn't seem like there IS any other way to properly capture and display data from a form click so please don't be too harsh on the grading for learning, line by line (which I am doing) how JS is supposed to take in information from a page.
//
// Complete the event handler function for the form
function runEnter() {
  console.log("inside the function");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");
  
    // Get the value property of the input element
    // var inputValue = inputElement.property("value");
  
    console.log(inputValue);

    // Deleting init table
    let cleaningHouse = d3.select("tbody");
    cleaningHouse.html("");

    let filteredDateSightings = data.filter(sawUFO => sawUFO.datetime === inputValue);

    console.log(filteredDateSightings);

    filteredDateSightings.forEach((dateSight) => {
      let row = tbody.append("tr");
      Object.entries(dateSight).forEach(([key, value]) => {
        var cell = row.append("th");
        cell.text(value);
      });
    });

}