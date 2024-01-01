/* const year = document.getElementsByID("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear */

// Get the current year
let currentDate = new Date();
let year = currentDate.getFullYear();

// Find the element with the id "currentYear"
let currentYearElement = document.getElementById("year");

// Update the content of the element with the current year
currentYearElement.textContent = year;