//1.Declara una variable “let edad = Number”, luego crea un condicional “if” donde hagas una comparación, si la edad es mayor o igual a 18, imprime en consola “VÁLIDO”. De lo contrario “NO VÁLIDO”.

let edad1 = prompt('Ingrese su edad:');

if (edad1 >= 18){
    alert('VÁLIDO');
}else{
    alert('NO VÁLIDO');
}

//2.Crea un array que contenga mínimo 4 objetos, que a su vez contengan como mínimo 3 claves e imprime todo el array en consola con un bucle “for”.

let personas = [
    {nombre: 'Fernanda', edad: '23', cumpleaños: ' Enero'},
    {nombre: 'Omar', edad: '20', cumpleaños: ' Agosto'},
    {nombre: 'Javier', edad: '12', cumpleaños: ' Abril'},
    {nombre: 'Jaime', edad: '18', cumpleaños: ' Septiembre'}
];

for(i=0; i < personas.length; i++ ){

    console.log ('El nombre es : ' + personas[i].nombre + ' edad : ' + personas[i].edad + ' Mes de cumpleaños :' + personas[i].cumpleaños);

}

//3.Crear un bucle switch donde simula la venta de entradas al cine. Donde dependiendo de la edad el cliente recibe alguna promoción.
let edad = prompt('Ingrese su edad:');


switch(edad){
    case '10':
        alert('20% de descuento en dulceria');
        break;
    case '18':
        alert('2x1 en todas las salas los dias miércoles');
        break;
    case '60':
        alert('40% de descuento en todas las salas');
        break;
    default:
        alert('No existe ninguna promoción');
        break;
}