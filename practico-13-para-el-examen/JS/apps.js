let nombre = "Juan";
let edad = 30;
console.log(nombre);
console.log(edad);
let estatura = 1.75;
let activo = true;
console.log(estatura);
console.log(activo);
let nombreCompleto = prompt("Ingrese su nombre:");
console.log("NombreCompleto: " + nombreCompleto);
if (nombreCompleto === 18) {
    console.log("mayor de edad");
}
let edad1 = Number(prompt("Ingrese su edad:"));
console.log("Edad: " + edad1);  
let notas = Number(prompt("Ingrese su nota:"));
if (notas >= 51) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}
let nota1 = Number(prompt("Ingrese su nota:"));
if (nota1 >= 90) {
    console.log("execelente");
} else if (nota1 >= 70) {
    console.log("regular");
} else {
    console.log("reprobado");
}
let opcion = Number(prompt("Ingrese opcion"));
switch (opcion) {
    case 1:
        console.log("Registrar");
        break;
    case 2:
        console.log("Modificar");
        break;
        default:
        console.log("Opcion invalida");
}
for(let i =1;i<=5;i++){
    console.log(i);
}
let contar =1;
while(contar <= 5){
    console.log(contar);
    contar++;
}
function saludar(){
    console.log("bienvenido al sistema");
}
saludar();
function saludarNombre(nombre){
    console.log("Hola " + nombre);
}
saludarNombre("Ana");
function multiplicar(a,b){
    return a*b;
}
let resultado = multiplicar(5,3);
console.log(resultado);
function evaluaNota(nota){
}
let aprobados = 0;
let reprobados = 0;
let cantidad = Number(prompt("Ingrese la cantidad de estudiantes:"));
for(let i=1;i<=cantidad;i++){
}
