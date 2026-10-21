const formulario = document.getElementById("calculadora");
const numero1 = document.getElementById("n1");
const numero2 = document.getElementById("n2");
const operacao = document.getElementById("selector");
const resultado = document.getElementById("valorResultado");


formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const n1 = Number(numero1.value);
    const n2 = Number(numero2.value);
    const operador = operacao.value;


    if (numero1.value === "" || numero2.value === "") {
        resultado.textContent = "Digite os dois números.";
        return;
    }


    let calculo;


    if (operador === "+") {
        calculo = n1 + n2;
    } else if (operador === "-") {
        calculo = n1 - n2;
    } else if (operador === "*") {
        calculo = n1 * n2;
    } else if (operador === "/") {

    if (n2 === 0) {
        resultado.textContent = "Não é possível dividir por zero.";
        return;
    }
    calculo = n1 / n2;
    } else if (operador === "%") {
        calculo = (n1 * n2) / 100;
    }
    resultado.textContent = `Resultado: ${calculo}`;

});