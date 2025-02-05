function isFibonacci(num) {
    let a = 0, b = 1, temp;
    
    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }
    
    return b === num || num === 0;
}

const numero = 23; //inserir aqui o valor para testar

if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} NÃO pertence à sequência de Fibonacci.`);
}