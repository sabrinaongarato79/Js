function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  const gato = {
    nombre: nombre,
    edad: edad,
    miau: function () {
      return "Meou!"
    }
  }
  return gato;
}
console.log(crearGato("Oliver", 2))

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;//BRACKET NOTATION
  return objeto;
}
/*  const obj={};
console.log(agregarPropiedad(obj,"nombre"))
function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto.metodo();
  
}
const element={};
 function metodo1(){
return "hola";
}

console.log(invocarMetodo(element,metodo1));*/

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5

}
const obj2 = {
  numeroMisterioso: 56,

}
console.log(multiplicarNumeroDesconocidoPorCinco(obj2))

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  const Usuario = {
    nombre: nombre,
    email: email,
    password: password,
  }
  return Usuario;
}
console.log(nuevoUsuario("Juanjo", "j@gmail.com", "hola"))


function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario.email) {
    return true;
  }
  else {
    return false;
  }
}


const usuario = {
  email: "sabrina@gmail.com"

}
console.log(tieneEmail(usuario))
function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto["propiedad"]) {
    return true;
  } else {
    return false;
  }
}
const obj1 = {
  propiedad: "hola"
}
console.log(tienePropiedad(obj1, "hola"))
function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  if (usuario.password === password) {
    return true;

  } else {
    return false;
  }

}
const usuario1 = {
  password: "123456",
}
console.log(verificarPassword(usuario1, "123456"))
function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;
  return usuario;
}
const usuario2 = {
  password: "123456",
}
console.log(actualizarPassword(usuario2, "34578"))
function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}
const usuario3 = {
  amigos: ["Juan", "Sabrina"],
}
console.log(agregarAmigo(usuario3, "Romina"))
function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;

  }
  return usuarios;
}
const usuarios1 = [
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
];
console.log(pasarUsuarioAPremium(usuarios1))

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  let sumLikes=0;
for (let i = 0; i < usuario.posts.length; i++) {

  sumLikes+=usuario.posts[i].likes    

  
}
return sumLikes;
}

const usuario4 = {
  posts: [
    {
      id: '1',
      title: 'Aventuras en JS!',
      likes: 10
    },
    {
      id: '2',
      title: 'Soy Henry!',
      likes: 100
    },
    {
      id: '3',
      title: 'Qué es un JavaScript?',
      likes: 35
    },
  ]
}
console.log(sumarLikesDeUsuario(usuario4))


function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
 producto.calcularPrecioDescuento=function(){
let descuento =producto.precio -( producto.precio* producto.porcentajeDeDescuento);
producto.precio=descuento;
return producto.precio;
 }

return producto;
}
const producto = {
  precio: 80,
  porcentajeDeDescuento: 0.1,
};
console.log(agregarMetodoCalculoDescuento(producto))
console.log(producto.calcularPrecioDescuento())