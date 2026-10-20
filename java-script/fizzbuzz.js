const numero = Number(prompt("Ingresa un número:"));
fizzBuzz(numero);

function fizzBuzz(n) {

    if (n <= 0) {
        console.log("Por favor, ingresa un número positivo o mayor a cero.");
        return;
    }

    if (isNaN(n)) {
        console.log("Por favor, ingresa un número válido.");
        return;
    }

    if (!Number.isInteger(n)) {
        console.log("Por favor, ingresa un número entero.");
        return;
    }

    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        }

    }
}