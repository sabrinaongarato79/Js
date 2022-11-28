// ARRAYS

const nombresEstudiantes = ["Sabrina", "JuanJo", "Diego", "Laura", "Lucas"];

console.log(nombresEstudiantes.length);

console.log(nombresEstudiantes[0]);

console.log(nombresEstudiantes[nombresEstudiantes.length-1]);

nombresEstudiantes[0] = "Liliana";
nombresEstudiantes[2] = "Carlos";

console.log(nombresEstudiantes);

//METODOS PUSH & POP

console.log(nombresEstudiantes);

const longitudArray = nombresEstudiantes.push("Ramiro");
console.log(longitudArray);
console.log(nombresEstudiantes.push("Kevin"));
console.log(nombresEstudiantes.push("Sofia"));

console.log(nombresEstudiantes);

console.log(nombresEstudiantes.pop());
console.log(nombresEstudiantes);

//METODOS SHIFT & UNSHIFT

console.log(nombresEstudiantes);
console.log(nombresEstudiantes.shift());
console.log(nombresEstudiantes);
console.log(nombresEstudiantes.unshift("Julieta"));
console.log(nombresEstudiantes);

//RECORRIENDO UN ARRAY

console.log(nombresEstudiantes.length);

for (let i = 0; i < nombresEstudiantes.length; i++) {
    console.log(nombresEstudiantes[i]);  
}