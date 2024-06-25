Number.prototype.isPrime = function() {
    if (this <= 1) return false; // los numeros menor o igual a 1 no son primos
    if (this <= 3) return true; // 2 y 3 son primos
    if (this % 2 === 0 || this % 3 === 0) return false; // multiplos de 2 y 3  no son primos 
    
    for (let i = 5; i * i <= this; i += 6) {
        if (this % i === 0 || this % (i + 2) === 0) return false; // verifica por i y i + 2
    }
    return true; // el numero es primo,  si no hay divisores.
}

// se verifica si un número específico es primo
let numero = 29;
let esPrimo = numero.isPrime();
console.log(`¿${numero} es primo? ${esPrimo}`);

const { performance } = require('perf_hooks');

const start = performance.now();
let primeCount = 0;
let num = 2;

while (primeCount < 1e4) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}

console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

function findPrimes(limit) {
    const start = performance.now();
    let primeCount = 0;

    for (let num = 2; num <= limit; num++) {
        if (num.isPrime()) {
            primeCount++;
        }
    }

    const end = performance.now();
    console.log(`Found ${primeCount} prime numbers up to ${limit} in ${end - start} milliseconds.`);
}

findPrimes(1000000);


// Fibonacci recursivo
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}

// Fibonacci iterativo
// es la funcion mas rapida 
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}

// se mide  el tiempo para Fibonacci recursivo
const start1 = performance.now();
const fibRec = rFib(20); // Calcular Fibonacci de 20
const end1 = performance.now();
console.log(`Fibonacci recursivo de 20: ${fibRec}`);
console.log(`Tiempo tomado por Fibonacci recursivo: ${end1 - start1} milisegundos`);

// se mide el tiempo para Fibonacci iterativo
const start2 = performance.now();
const fibIter = iFib(20); // se calcula  Fibonacci de 20
const end2 = performance.now();
console.log(`Fibonacci iterativo de 20: ${fibIter}`);
console.log(`Tiempo tomado por Fibonacci iterativo: ${end2 - start2} milisegundos`);

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";


const reversed1 = reverseString(story); // invierte la cadena story mas eficiente  y directa.
console.log(reversed1);
