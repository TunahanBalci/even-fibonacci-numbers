const fibonacciAllNumbers = [1, 2];
const fibonacciEvenNumbers = []

for (i = 0; i < 100; i++) {
    let a = fibonacciAllNumbers[i] + fibonacciAllNumbers[i + 1]
    if (a > 4000000) {
        break;
    }
        fibonacciAllNumbers.push(a);
}

for (i = 0; i < fibonacciAllNumbers.length; i++) {
    let b = fibonacciAllNumbers[i];
    if (fibonacciAllNumbers[i] % 2 == 0) {
        fibonacciEvenNumbers.push(b);
    } 
}

console.log (fibonacciEvenNumbers.reduce((a, b) => a + b, 0));
