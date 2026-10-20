const peso = Number(prompt("¿Cuánto pesas?"));
const estatura = Number(prompt("¿Cuánto mides?"));

if(peso <= 0 || estatura <= 0) {
    console.log("Por favor, ingresa valores válidos para peso y estatura.");
} else {
    const imc = calcularIMC(peso, estatura);
    console.log("Tu IMC es:", calcularIMC(peso, estatura));
    console.log("Clasificación:", clasificarIMC(imc));
}

function calcularIMC(peso, estatura) {
    const imc = peso / (estatura * estatura);
    return imc;
}

function clasificarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}