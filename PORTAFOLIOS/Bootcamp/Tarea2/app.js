//Edad y si es mayor de edad
let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");

if (edad >= 18) {
    console.log(`Hola ${nombre}, con sus ${edad} años usted es mayor de edad`);
}
else {
    console.log(`Hola ${nombre}, con sus ${edad} años usted aun no es mayor de edad, no beba.`);
}


for (let i = 0; i < 10; i++) {
    console.log(i);
}

while (i < 10) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
}
while (i < 10);

 
/* 
Generaciones

z = 7 -22
Millenial = 23 - 40
X = 41 - 56
Baby Boomer = 57 - 75

*/

/* let gen = prompt("Ingrese su edad:");

switch(gen){
    case "Z":
    case "M":
        console.log("");

    case "Z":
        console.log("Generacion Z");
        break;
    case "Millenial":
        console.log("Generacion Millenial");
        break;
    case "X":
        console.log("Generacion X");
        break;
    case "Baby Boomer":
        console.log("Generacion Baby Boomer");
        break;
    default:
        console.log("No se encuentra en ninguna generacion");
} */


