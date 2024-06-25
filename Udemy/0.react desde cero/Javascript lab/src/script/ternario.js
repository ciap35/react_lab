document.write("<h3>ternario.js</h3>");
const saldoCuenta = 10;

const mensaje = saldoCuenta< 0 ? "<p>No tienes saldo</p>" : "<p>Tienes saldo</p>";
//const mensaje = saldoCuenta <= 0 && "<p>No tienes saldo</p>" ; //Caso contrario devuelve false

/*let mensaje;

if(cuenta<0)
    mensaje = "No tienes saldo";
else
    mensaje = "Tienes saldo";
*/
//document.write('<br><br><br>');
document.write(mensaje);