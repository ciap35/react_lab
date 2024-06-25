// Display the script name as a heading
document.write("<h3>interval.js</h3>");

// Create a container for the date and time output
const outputContainer = document.createElement("div");
document.body.appendChild(outputContainer);

// Define a function to print the current date and time
function printDateTime() {
   // Get the current date and time
   const now = new Date();
    
   // Format the date and time as a string
   const dateTimeString = now.toLocaleString();
   
   // Create a new paragraph element for the date and time
   const dateTimeElement = document.createElement("p");
   dateTimeElement.textContent = dateTimeString;
   
   // Append the new element to the output container
   outputContainer.appendChild(dateTimeElement);
   
   // Create and append a new <br> element
   const brElement = document.createElement("br");
   outputContainer.appendChild(brElement);
}

// Use setInterval to call printDateTime every 1000 milliseconds (1 second)
const intervalId = setInterval(printDateTime, 1000);

// Optionally, you can stop the interval after a certain period of time
// For example, stop after 10 seconds
setTimeout(() => {
    clearInterval(intervalId);
    const stopMessage = document.createElement("p");
    stopMessage.textContent = 'Interval stopped';
    outputContainer.appendChild(stopMessage);
}, 1000);