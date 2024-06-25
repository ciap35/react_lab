document.write("<h3>timeout.js</h3>");
const evaluateFunction = () =>{
    const age = prompt("How old are you?");
    if(age < 18){
        alert("You're unable to get in");
        return;
    }

    alert("Be welcome");
};

setTimeout(evaluateFunction,2000);