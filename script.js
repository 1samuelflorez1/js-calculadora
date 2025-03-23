document.getElementById("calcular").addEventListener("click", function() {
   
    let operador1 = document.getElementById("valor1").value;
    let operador2 = document.getElementById("valor2").value;
    let operador = document.getElementById("operador").value;
    let resultado = document.getElementById("resultado");
    let valor1 = Number(operador1);
    let valor2 = Number(operador2);

    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.textContent = "ERROR: Ingresa números válidos";
    } else{

    if (operador === "+") {
        resultado.textContent = "Resultado: " + (valor1 + valor2);
    } else if (operador === "-") {
        resultado.textContent = "Resultado: " + (valor1 - valor2);
    } else if (operador === "%") {
        resultado.textContent = "Resultado: " + (valor1 % valor2);
    } else if (operador === "**") {
        resultado.textContent = "Resultado: " + (valor1 ** valor2);
    } else if (operador === "*") {
        resultado.textContent = "Resultado: " + (valor1 * valor2);
    } else if (operador === "/") {
        if (valor2 === 0) {
            resultado.textContent = "ERROR: ¡No se puede dividir por cero!";
        } else {
            resultado.textContent = "Resultado: " + (valor1 / valor2);
        }
    } else {
        resultado.textContent = "ERROR: Operador No Válido!";
    }
}
});