console.log("HOLA,MUNDO"!);
// esta es la forma de comentar en JS
// CONSOLE.LOG -> la forma de enviar mensajes a la consola del navegador
console.log("HOLA DESARROLLADORES Y pSICOLOGOS")
console.log ("mi")

//CONCEPTOS BASICOS EN JAVASCRIPT

//1. Tipos de variables
//2. manejo del DOM
//3. Condicionales 
//4..Ciclos

// LAS VARIABLES EN JS

//Hay 3 tipos de variables en js

// VAR -> un tipo de variable que ya no seusa (NO LA VAMOS A USAR) -> Cambia en el tiempo

// LET -> E una variable que cambia en el tiempo

resultado =5+3
resultado ="Luisa"
//CONST -> Una variable que no puede cambiar en el tiempo


//TIPOS DE DATOS O INFORMACIO PODEMOS ALMACENAR

//Numericos
let numeros= 7;

// cadena de caracteres -> texto -> string (en programacion)
// El texto SIEMPRE debe estar dentro de comillas
let texto= "hola,mundo"

//Booleanos -> un dato que puede ser verdadero o falso
let esVERDADERO = true; //TRUE -> VARDADERO
let esFalso= false; //false -> falso

//Areglos -> arrays (en programacion) -> me permiten alamacenar varios datos al mismo teiempo en una misma variable
// let arregloNombres  =["Luisa"," Emanuel","Dayanann"]
let arregloNumeros = ["1","3","4"]

//Objetos ->"Una representacion de la vida real,pero en nuestro codigo"

// -> atributos-> caracteristicas de este objeto
// ->metodos -> acciones

// (){} []
//  {} -> llaves -> para declarar objetos
// [] -> corchetes -> son para declarar arreglos
// () -> parentesis -> nos permite ejecutar acciones -> invocar


const celular = {
    color:"blanco",
    modelo: "Galaxy A7",
    ancho:350,
    alto:800,
    enviarMensajes: function(){
        //entre estos corchetes al lado de unos parentesis yo establezco la accion a realizar
        console.log("Mensaje enviado");
    },
    //El metodo -> las acciones  -> directamente una operacion
    sumar: function(){
          console.log(5+4);
    }

}
//funciones -> pueden o no recibir datos de entrada -> un procesamiento de datos  y luego nos devuelve un resultado
function buscarObjeto(){
     console.log("le muestra lo que esta buscando")

}
function filtratrInformacion(){
    console.log("me muestra solo informacion de la depresion");
}


//en la Carpeta scripts van TODOS los archivos de JS PERO destinados a darle dinamismo al sitio web NO SE RELACIONAN CON LA FUNCIONALIDAD DELSITIO A NIVEL DEL BACKEND

//NODE JS -> Utiizamos para poder implementar js en nuestro icken -> Operaciones logicas nos permiten el FUNCIONAMIENTO de nuestro sitio web backend -> Operaciones logicas nos permiten el FUNCIONAMIENTO de nuestro sitio web 
