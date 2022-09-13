//Ejercicio 1
//Numeros del 1 al 100
for (i = 1; i < 101; i++ ){
    console.log(i)
}


//Tablas del 2 al 9
for (i = 2; i < 10; i++ ){
    for (j = 1; j < 10; j++ ){
        console.log(i + " x " + j + " = " + i * j);
    }
}


//Numeros impares del 1 al 1000
for (i = 1; i < 1001; i++){
    if (i % 2 != 0){
        console.log(i)
    }
}
