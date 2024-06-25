// Display the script name as a heading
document.write("<h3>fetch.js</h3>");

const fetchDiv = document.createElement("div");
document.body.appendChild(fetchDiv); // Make sure the fetchDiv is appended to the body

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json()) // Correctly parse the JSON
    .then((data) => {
        // Create a paragraph element to hold the user data
        const userData = document.createElement("p");
        
        // Set the text content to the user's name and email for example
        userData.textContent = `Name: ${data.name}, Email: ${data.email}`;
        
        // Append the paragraph element to the fetchDiv
        fetchDiv.appendChild(userData);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
