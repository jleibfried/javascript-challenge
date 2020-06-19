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
      let cell = row.append("th");
      cell.text(value);
    });
  });

// Cull list based on date
let button = d3.select("#filter-btn");
let form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);
  

// Shamelessly copying this code from 
// 01-Lesson-Plans\14-Intro-To-JavaScript\3\Activities\09-Par_Form_Filter
// Though in my defense it doesn't seem like there IS any other way to properly capture and display data from a form click so please don't be too harsh on the grading for learning, line by line (which I am doing) how JS is supposed to take in information from a page.
//
// Complete the event handler function for the form
function runEnter() {
  //console.log("inside the function");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    let inputDate = d3.select("#datetime");
    let inputCity = d3.select("#city");
    let inputState = d3.select("#state");
    let inputCountry = d3.select("#country");
    let inputShape = d3.select("#shape");

    let inputDateValue = inputDate.property("value");
    let inputCityValue = inputCity.property("value").toLowerCase();
    let inputStateValue = inputState.property("value").toLowerCase();
    let inputCountryValue = inputCountry.property("value").toLowerCase();
    let inputShapeValue = inputShape.property("value").toLowerCase();
    
    // Get the value property of the input element
    // var inputValue = inputElement.property("value");
    // console.log(inputDateValue);
    // console.log(inputCityValue);
    // console.log(inputStateValue);
    // console.log(inputCountryValue);
    // console.log(inputShapeValue);

    // Deleting init table
    let cleaningHouse = d3.select("tbody");
    cleaningHouse.html("");

    // If input is "" return an unfiltered list but updated name
    // If input is not "" filter previous list and pass it on with updated name
    // Display list at the end

    // Setting up variables outside the IF statements
    // I kept assigning them inside and checking them outside
    // It did not work
    let filteredDateSightings;
    let filteredCitySightings;
    let filteredStateSightings;
    let filteredCountrySightings;
    let filteredShapeSightings;

    // Filtering by date
    if(inputDateValue==""){
      filteredDateSightings = data;
    }else{
      filteredDateSightings = data.filter(sawUFO => sawUFO.datetime === inputDateValue);
    }


    // Filtering by city
    if(inputCityValue==""){
      filteredCitySightings = filteredDateSightings;
    }else{
      filteredCitySightings = filteredDateSightings.filter(sawUFO => sawUFO.city === inputCityValue);
    }


    // Filtering by State
    if(inputStateValue==""){
      filteredStateSightings = filteredCitySightings;
    }else{
      filteredStateSightings = filteredCitySightings.filter(sawUFO => sawUFO.state === inputStateValue);
    }


    // Filtering by Country
    if(inputCountryValue==""){
      filteredCountrySightings = filteredStateSightings;
    }else{
      filteredCountrySightings = filteredStateSightings.filter(sawUFO => sawUFO.country === inputCountryValue);
    }


    // Filtering by Shape
    if(inputShapeValue==""){
      filteredShapeSightings = filteredCountrySightings;
    }else{
      filteredShapeSightings = filteredCountrySightings.filter(sawUFO => sawUFO.shape === inputShapeValue);
    }

    
    filteredShapeSightings.forEach((dateSight) => {
      let row = tbody.append("tr");
      Object.entries(dateSight).forEach(([key, value]) => {
        let cell = row.append("th");
        cell.text(value);
      });
    });
  

}