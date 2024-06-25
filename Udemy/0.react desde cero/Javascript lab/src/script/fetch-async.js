const requestfetchAsync = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
    const data = await response.json();
    //console.log(data);
    return data;
};

const responsefetchAsync = requestfetchAsync().then(console.log);
