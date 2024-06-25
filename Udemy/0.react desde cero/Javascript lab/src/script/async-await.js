document.write("<h3>async-await.js</h3>");

/*const saludo = async () => {
    return "Hola mundo";
};

//Todas las funciones Async se convierten en promesas
saludo().then((response)=>console.log(response));*/

const request = async () => {
    setTimeout(()=>{
    const data = {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
    };
    console.log("response: ",data);
    },1000);
}

request();