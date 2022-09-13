/* 
Generaciones

z = 7 -22
Millenial = 23 - 40
X = 41 - 56
Baby Boomer = 57 - 75

*/

let gen = prompt("Ingrese su edad:");

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
}
