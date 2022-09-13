
function fibonacci(numero){
    let serie = [0,1];

    for (let i = 2; i < numero; i++) {
        serie[i] = serie[i-1] + serie[i-2];
    }
    
    console.log(serie);
}

fibonacci(10);