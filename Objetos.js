//OBJETOS

const persona = {       //esto es un objeto
    nombre: "Sabrina",   //clave:valor
    apellido: "Ongarato",
    coleccionDeLibros: ["Libro1", "Libro2", "Libro3"],
    mascota: { nombre: "Toby", raza: "Dalmata", },
    edad: 43,
    mail: "sabrina@gmail.com",
};

const nombres = ["Juan", "Sabrina", "Carlos", [1, 2, 3], persona]; //array puede contener objetos

const auto = {
    modelo: 2015,
    marca: "Ford",
    transmision: "Manual",
    cantDePuertas: 5,
    color: "Rojo",
}
console.log(auto);

//DOT NOTATION = nombreObjeto.propiedad
console.log(auto.color);
auto.color = "Negro";   //Modificando valor de propiedad
console.log(auto);

//BRACKET NOTATION = nombreObj[propiedad]
console.log(auto["modelo"]);
const marcaVariable = "marca"
console.log(auto[marcaVariable]);
auto["marca"] = "Fiat";
console.log(auto);


//Métodos (funciones como propiedad de un objeto)
const auto2 = {
    modelo: 2018,
    marca: "Fiat",
    transmision: "Automatico",
    cantDePuertas: 3,
    color: "Blanco",
    acelerar: function () {
        let suma = 5 + 5;
        return suma;
    },
    mostrarModelo: function () {
        return this.modelo;
    },
};

console.log(auto2.marca);
console.log(auto2.acelerar());
// console.log(auto2[acelerar()]); //Los métodos no pueden instanciarse con bracket notation

//FOR IN
for (let propiedad in auto2) {  //declaro variable con el nombre que quiera, palabra reservada "in" y por último nombre del objeto
    console.log(propiedad);
    console.log(auto2[propiedad]);
};

//THIS --> autoreferencia del nombre del objeto
const auto3 = {
    modelo: 2018,
    marca: "Fiat",
    transmision: "Automatico",
    cantDePuertas: 3,
    color: "Blanco",
    acelerar: function () {
        let suma = 5 + 5;
        return suma;
    },
    mostrarModelo: function () {
        return "El modelo de mi auto es " + this.modelo;
    },
};
console.log(auto3.mostrarModelo());

