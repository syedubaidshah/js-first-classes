/********************************question 1************************************/

// Declare and empty array using JS literal notation to store students name in future.
let studentNames = [];
studentNames.push("ubaid");
studentNames.push("huzaifa");

/********************************question 2************************************/

// Declare and emty arrayusing js object notation to store students names in future.
let studentNames1 = { names: [] };
studentNames1.names.push("ubaid");
studentNames1.names.push("huzaifa");

/********************************question 3************************************/

// Declare and initialize a string array.
let stringsArray = ["apple", "banana", "orange", "grape"]; // Initializing a strings array with values
console.log(stringsArray[0]);
console.log(stringsArray[1]);

/********************************question 4************************************/

// Declare and initialize a number array.
let numbersArray = [10, 20, 30, 40, 50]; // Declaration and initialization of a numbers array
console.log(numbersArray[0]);
console.log(numbersArray[1]);

/********************************question 5************************************/

// Declare and initialize a boolean array.
let booleanArray = [true, false, true, false]; // Declaration and initialization of a boolean array
console.log(booleanArray[0]);
console.log(booleanArray[1]);

/********************************question 6************************************/

// Declare and initialize a mixed array.
let mixedArray = ["apple", 10, true, "banana", false];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);

/********************************question 7************************************/

// Declare and initialize the array with education qualifications
let qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];
function displayQualifications() {
  let qualificationsDiv = document.getElementById("qualifications");
  let list = document.createElement("ul");
  qualifications.forEach(function (qualification) {
    let listItem = document.createElement("li");
    listItem.textContent = qualification;
    list.appendChild(listItem);
  });
  qualificationsDiv.appendChild(list);
}
displayQualifications();

/********************************question 8************************************/

// Declare arrays to store student names and scores
let studentNames2 = ["John", "Emma", "Michael"];
let studentScores = [400, 450, 480];
function calculatePercentage(score) {
  return (score / 500) * 100;
}
for (let i = 0; i < studentNames2.length; i++) {
  let percentage = calculatePercentage(studentScores[i]);
  console.log(
    `${studentNames2[i]} scored ${studentScores[i]} out of 500. Percentage: ${percentage}%`
  );
}

/********************************question 9************************************/

// Initialize an array with color names
let colors = ["red", "green", "blue"];

// Display the array elements in the browser
console.log("Initial array:", colors);

// Ask the user what color to add to the beginning
let colorToAddStart = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddStart); // Add the color to the beginning
console.log("Array after adding color to the beginning:", colors);

// Ask the user what color to add to the end
let colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd); // Add the color to the end
console.log("Array after adding color to the end:", colors);

// Add two more colors to the beginning
colors.unshift("yellow", "orange");
console.log("Array after adding two more colors to the beginning:", colors);

// Delete the first color in the array
colors.shift();
console.log("Array after deleting the first color:", colors);

// Delete the last color in the array
colors.pop();
console.log("Array after deleting the last color:", colors);

// Ask the user at which index to add a color and the color name
let indexToAdd = parseInt(
  prompt("Enter the index where you want to add a color:")
);
let colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);
console.log("Array after adding a color at the desired position:", colors);

// Ask the user at which index to delete color(s) and how many colors to delete
let indexToDelete = parseInt(
  prompt("Enter the index from where you want to delete color(s):")
);
let deleteCount = parseInt(prompt("How many colors do you want to delete?"));
colors.splice(indexToDelete, deleteCount);
console.log(
  "Array after deleting color(s) from the user-defined position:",
  colors
);

/********************************question 10************************************/

// Initialize an array with student scores
let studentScores3 = [85, 72, 93, 65, 78];

console.log("Initial array:", studentScores3);

// Sort the array in ascending order
studentScores3.sort(function (a, b) {
  return a - b;
});

// Display the sorted array
console.log("Sorted array in ascending order:", studentScores3);

/********************************question 11************************************/

// Initialize an array with city names
let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

// Initialize an empty array to store selected cities
let selectedCities = [];

// Copy three array elements from cities array to selectedCities array
selectedCities = cities.slice(0, 3);

// Display the arrays
console.log("Cities array:", cities);
console.log("Selected cities array:", selectedCities);

/********************************question 12************************************/

var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
console.log(singleString);

/********************************question 13************************************/

// Initialize an empty array to act as a FIFO queue
let fifoQueue = [];

// Function to add an element to the FIFO queue
function enqueue(value) {
  fifoQueue.push(value);
}

// Function to remove the first element from the FIFO queue
function dequeue() {
  return fifoQueue.shift();
}

// Adding values to the FIFO queue
enqueue("A");
enqueue("B");
enqueue("C");

// Accessing the values in the order they were stored
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());

/********************************question 14************************************/

// Initialize an empty array to act as a LIFO stack
let lifoStack = [];

// Function to push an element onto the LIFO stack
function push(value) {
  lifoStack.push(value);
}

// Function to pop the last element from the LIFO stack
function pop() {
  return lifoStack.pop();
}

// Pushing values onto the LIFO stack
push("A");
push("B");
push("C");

// Accessing the values in reverse order
console.log(pop());
console.log(pop());
console.log(pop());

/********************************question 15************************************/

// Array containing phone manufacturers
let phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

// Generating the dropdown/select menu using document.write()
document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
  document.write(
    '<option value="' +
      phoneManufacturers[i] +
      '">' +
      phoneManufacturers[i] +
      "</option>"
  );
}
document.write("</select>");
