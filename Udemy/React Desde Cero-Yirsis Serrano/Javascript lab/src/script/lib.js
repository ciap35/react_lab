document.write("<h3>lib.js</h3>");
function printCurrentDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    var output = `Date: ${formattedDate} Hora: ${formattedTime}`;
    document.write(output)
    console.log(output);
}

printCurrentDateTime();


/*With const syntax we prevent XSS attack.
Traditional Function
const sumar = function(a,b){
    return a+b;
}*/

//FatArrow Functions
const add = (a,b) => {
    return a+b;
}

//FatArrow Functions reducted code with single line
//We delete {} and return
//const add = (a,b) => a+b;

const result = add(5,3);



