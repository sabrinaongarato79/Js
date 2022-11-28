const nombres=["sabrina","jorge","paula","Indra","Ruben"];
const numeros=[1,2,3,4,5,20,25,30];


function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
 
}
console.log(devolverPrimerElemento(nombres));


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}
console.log(devolverUltimoElemento(nombres));

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
console.log(obtenerLargoDelArray(nombres));


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
 let array2=[];
 for (let i = 0; i < array.length; i++) {
  array2[i]=array[i]+1;

 }
 return array2;
}
console.log(incrementarPorUno(numeros));


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
console.log(agregarItemAlFinalDelArray(nombres,"Pablo"));

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
console.log(agregarItemAlComienzoDelArray(nombres,"Elizabeth"));


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
   return palabras.join(" ");

}
console.log(dePalabrasAFrase(nombres));


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
   return array.includes(elemento);
}
console.log(arrayContiene(nombres,"Eduardo"));


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma=0;
  for (let i = 0; i < numeros.length; i++) {
     suma+= numeros[i];
  }
  return suma;
}
console.log(agregarNumeros(numeros));

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio=0;
  for (let i = 0; i < resultadosTest.length; i++) {
    promedio+=resultadosTest[i];
    
  }
   return promedio/resultadosTest.length;
  
}0
console.log(promedioResultadosTest(numeros));


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:  
  console.log(...numeros);

// let palabras=["hola","soy","estudiante"];
// console.log(...palabras);
  return Math.max(...numeros);
}
console.log(numeroMasGrande(numeros));

function multiplicarArgumentos(arguments) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let multiplicar=1;
  if(arguments.length===0){
  return 0;
 }
 else{
  for (let i = 0; i < arguments.length; i++) {
    multiplicar*=arguments[i];    
  }
 }
 return multiplicar;
}
console.log( multiplicarArgumentos(numeros));



function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
    let arreglo2= [];
  for (let i = 0; i < arreglo.length; i++) {
   if(arreglo[i]>18){
    arreglo2.push(arreglo[i]);
   }
    
  }
  return arreglo2.length;
}
console.log(numeros);
console.log(cuentoElementos(numeros));



function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
 if (numeroDeDia===1 || numeroDeDia===7) {
  return "fin de semana";
  
 }
 else{
    return "Es dia laboral";
 }
}
console.log(diaDeLaSemana());


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numToWord=n.toString();
  if(numToWord[0]=== "9"){
    return true;

 }
 else{
  return false;
 }
}
console.log(empiezaConNueve(90));

const numeros2=[1,1,1];

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i]===arreglo[i+1]) {
      return true;
    }
    else{
      return false;
    }  
    
  }
  
}
console.log(todosIguales(numeros2));


  const meses= ["Enero", "Marzo" , "Noviembre","Diciembre"];
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  //, guardarlo en nuevo array y retornarlo.
  //Si a "Enero", "Marzo" y "Noviembre"lguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let array2=[ ];
  for(let i=0; i< array.length;i++){
    if (array[i]=== "Enero" || array[i]=== "Marzo" || array[i]==="Noviembre") {
       array2.push(array[i]);
    
    }
    else{
      return "No se encontraron los meses pedidos";
    }
  }
    return array2;
}
console.log(mesesDelAño(meses));

const num1=[10,40,50,80,90,120,130,155,180];
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
let array2=[];
for (let i = 0; i < array.length; i++) {
if (array[i]>100) {
  array2.push(array[i]);  
} 
  
}
return array2;
}
console.log(mayorACien(num1));

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
 let totalSuma=[];
 for (let i = 0; i < 10; i++) {
  numero+=2;
  if (numero === i) {
    break;
    
  }
  else{
    totalSuma.push(numero);
  }

  
 }
 return totalSuma;
}
console.log( breakStatement(-3));



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
 
   let totalSuma=[];
    for (let i = 0; i <=10; i++) {
    if (i!==5) {
      numero +=2;
      totalSuma.push(numero);
    } else {
      console.log(i)
       continue;
      
    }
        
  }
  return totalSuma;
}
console.log(continueStatement(5));

