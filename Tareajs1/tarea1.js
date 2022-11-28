// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras, muestra por consola:
const nuevaString = "hola Juanjo";

console.log(nuevaString);

// Crea una variable numérica, puede ser cualquier número, muestra por consola:
const nuevoNum = 150;
console.log(nuevoNum);

// Crea una variable booleana, muestra por consola:
const nuevoBool = true;
console.log(nuevoBool);

// Crea una resta, muestra por consola:
const nuevaResta = 50 - 7;
console.log(nuevaResta);

// Crea una suma, muestra por consola:
const nuevaSuma = 80 + 50;
console.log(nuevaSuma);

// Crea una multiplicacion, muestra por consola:
const nuevaMultiplicacion = 10 * 20;
console.log(nuevaMultiplicacion);

// Crea una division, muestra por consola:
const nuevaDivision = 50 / 5;
console.log(nuevaDivision);

// Crea un módulo, muestra por consola:
const nuevoModulo = 30 % 10;
console.log(nuevoModulo);

function devolverString(parametro) {    //Creando la función
    // "Return" la string provista: str
    // Tu código:
    return parametro;
}
const argumento = true;
console.log(devolverString(argumento));  //Invocando la función

function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    let suma = x + y;
    return suma;
}
const num1 = 10 + 3;
const num2 = 80 * 2;
console.log(suma(num1, num2));

function resta(x, y) {
    // Resta "y" de "x" y devuelve el valor
    // Tu código:

    return x - y;

}
console.log(resta(20, 2));

function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:

    return x * y;
}
console.log(multiplica(10, 2));

function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    return x / y;

}
console.log(divide(10, 5));

function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    if (x === y) {
        return true;
    }
    else { return false };

}
console.log(sonIguales(10, 20));

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if (str1.length === str2.length) {
        return true;
    }
    else { return false };
}
let silla = "saludo";
let mesa = "cordia";
console.log(tienenMismaLongitud(silla, mesa));

function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num < 90) {
        return true;

    }
    else { return false };

} console.log(menosQueNoventa(90));

function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num > 50) {
        return true;
    }
    else { return false };

}
console.log(mayorQueCincuenta(12));

function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    return x % y;

}
console.log(obtenerResto(10, 5));

function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }

}
console.log(esPar(8));

function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num % 2 !== 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(esImpar(9));

function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    return Math.pow(num, 2);
}
console.log(elevarAlCuadrado(6));
function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    return Math.pow(num, 3);

}
console.log(elevarAlCubo(90));

function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    return Math.pow(num, exponent);
}
console.log(elevar(2, 2));

function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    return Math.round(num);
}
console.log(redondearNumero(8.4));

function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    return Math.ceil(num);

}
console.log(redondearHaciaArriba(6.1));

function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    return Math.random();
}
console.log(numeroRandom());

function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    if (numero > 0) {
        console.log("El numero es positivo");

    }
    else if (numero < 0) {
        console.log("El numero es negativo");

    }
    else {
        return false;
    }
} console.log(esPositivo(0));

function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    return str += "!";

}
console.log(agregarSimboloExclamacion("Hello World"));


function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Sabrina" -> "Soy Sabrina"
    // Tu código:
    return nombre + " " + apellido;
}
console.log(combinarNombres("Soy", "Sabrina"));

function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Juan" -> "Hola Juan!"
    // Tu código:
    return "hola " + nombre + "!";
}
console.log(obtenerSaludo("juan"));

function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    return alto * ancho;
}
console.log(obtenerAreaRectangulo(4, 2));


function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    return lado * 4;
}
console.log(retornarPerimetro(2));


function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    return (base * altura) / 2;
}
console.log(areaDelTriangulo(4, 4));


function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    return euro * 1.20;
}
console.log(deEuroAdolar(4));


function esVocal(letra) {
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    // Si no es vocal, tambien debe devolver "No es una vocal".
    //Escribe tu código aquí
    if (letra.length === 1) {
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            return "Es vocal";
        } else {
            return "No es una vocal";
        }
    } else {
        return "Dato incorrecto";
    }
}
console.log(esVocal("a"));
