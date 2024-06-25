document.write("<h3>json.js</h3>");
/*const person = {
    name: "John",
    lastname:"McGraw",
    male:true,
    setFemale: function (){
        this.male = false;
    }
};

document.write("<p>"+person.name+"</p>");
document.write("<p>"+person.lastName+"</p>");
document.write("<p>"+person.male+"</p>");*/

//Destructuring
const {name,lastname,male} = {
    name: "John",
    lastname:"McGraw",
    male:true,
    setFemale: function (){
        this.male = false;
    }
}

document.write("<p>"+name+"</p>");
document.write("<p>"+lastname+"</p>");
document.write("<p>"+male+"</p>");