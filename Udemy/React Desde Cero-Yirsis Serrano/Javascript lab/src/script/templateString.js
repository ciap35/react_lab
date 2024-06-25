// Display the script name as a heading
document.write("<h3>templateString.js</h3>");

// Define a Person object
const person = {
  name: "John",
  birthYear: 2000,
  // Method to calculate the age
  getAge: function() {
    return new Date().getFullYear() - this.birthYear;
  }
};

// Use template literals for string interpolation
const message = `Welcome, ${person.name}. You are ${person.getAge()} years old.`;

// Display the message on the document
document.write(message);