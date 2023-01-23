/*BUCLE FOR
Estructura:

for (variable= valor_inicial; condicion; incremento){
    acciones a realizar;
}
*/

/*
for (i = 1 ; i <= 5; i++){
    console.log('Ímpresion de mensaje ' + i)
}*/

//recorre valores del array

let estudiantes = [
    {nombre: 'Arturo', edad: '23', carrera: 'Ingenieria Mecanica'},
    {nombre: 'Omar', edad: '23', carrera: 'Medicina'},
    {nombre: 'Javier', edad: '22', carrera: 'Veterinaria'},
    {nombre: 'Jaime', edad: '24', carrera: 'Administración'}
];

//.length cuenta las posiciones del array  II La propiedad length de un objeto que es una instancia de tipo Array establece o devuelve la cantidad de elementos en esa matriz.
for(i=0; i < estudiantes.length; i++ ){

    console.log ('El nombre del estudiante es: ' + estudiantes[i].nombre);

}