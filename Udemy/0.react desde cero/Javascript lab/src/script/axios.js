document.write("<h3>Axios.js</h3>");

axios.get("https://jsonplaceholder.typicode.com/users/3")
//.then(()=> console.log(data.data));
// using destructuring
.then(({data})=> console.log(data));

// Fetch data using Axios
axios.get('https://jsonplaceholder.typicode.com/users/3')
    .then(response => {
        // Handle the response data
        console.log(response.data);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
    });
