document.write("<h3>arrays.js</h3>");

/*const arr = [1,2,3,4];

arr.map( (val,index)=>{
    document.write("["+index+"]="+val+"<br>"
    );
    
});*/

const users = ["John","Mathew","Carlos","Lucy"];
document.write(users);
document.write("<br>");
const [index0,index1,index2,index3,index4] = ["John","Mathew","Carlos","Lucy"];
document.write(index0+","+index1+","+index2+","+index3+","+index4);
document.write("<br>");
const [,,,,lastIndex] = ["John","Mathew","Carlos","Lucy"];
document.write(lastIndex);
document.write("<br>");
const [firstIndex,,,,] = ["John","Mathew","Carlos","Lucy"];
document.write(firstIndex);
document.write("<br>");
const [,secondValue,,,] = ["John","Mathew","Carlos","Lucy"];
document.write(secondValue);
document.write("<br>");
const [,,thirdValue,,] = ["John","Mathew","Carlos","Lucy"];
document.write(thirdValue);
document.write("<br>");
const [,,,fourthValue,] = ["John","Mathew","Carlos","Lucy"];
document.write("<br>");
document.write(fourthValue);

document.write(users);