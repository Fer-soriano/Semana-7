
//const clave = 123;

/* Condicional 123
if (calve == 123){
    console.log('aprobado);
}else{
    console.log('denegado');
}
}

*/

//operador terneario
//let acceso = (clave == 123 ? console.log('aprobado') : console.log('denegado'));
//prompt :mostrar un cuadro de diálogo con un mensaje que solicita al usuario que ingrese algún texto o información.
/*
let clave = prompt('Ingrese clave:');

let acceso = (clave == 123 ? true : false);

if (acceso == true){
    alert('acceso aprobado');
}else{
    alert('acceso denegado')
}
*/


//condicional else if 
let edad = prompt('Ingrese su edad:');

if (edad >= 60){
    alert('Usted tiene un descuento del 50% por se mayor de edad');
}else if (edad >=18){
    alert('Usted tiene un descuento del 10% por se mayor de edad');
}else{
    alert('usted necesita un representante para pagar');
}