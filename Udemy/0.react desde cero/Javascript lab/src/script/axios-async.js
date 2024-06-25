const axiosRequest = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/5");
    //console.log(data);
    return data;
    /*const axiosResponseData = await axios.get("https://jsonplaceholder.typicode.com/users/5");
    console.log(axiosResponseData.data);*/
};

//axiosRequest();
const axiosData = axiosRequest().then(console.log);
