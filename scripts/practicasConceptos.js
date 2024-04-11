//1. SIEMPRE SE DEBE HACER -> VERIFICAR QUE SI ESTE  CONECTADO CON EL HTML

console.log("HOLA, SOY LA ACTIVIDAD DE HOY 10/04/2024");


//2. TRAER LOS ELEMENTOS QUE NECESITAS DE SU HTML -> los que tiene id -> los elementos que me traiga deben estar en una variable -> debe ser constante

//document-> me accedea mi thml
//getElementById -> me trae un elmento en particular por su identificador unico
//dentro de los parentesis DEBO PONER EL MISMO ID que puse en mi html
const edadInput = document.getElementById("edadInput");
console.log(edadInput);

