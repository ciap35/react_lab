// Display the script name as a heading
document.write("<h3>spread.js</h3>");

// Arrays containing fruits and vegetables
const fruits = ["Lemon", "Strawberry", "Orange"];
const vegetables = ["Lettuce", "Carrot"];

// Combine the fruits and vegetables arrays into a new array using the spread operator
const newArray = [...fruits, ...vegetables];

// Display the new array on the document
document.write(newArray.join(', ')); // Use join to format the array as a comma-separated string
document.write("<br>");
document.write(newArray);

