const display = document.getElementById('display');

// Adiciona valor ao visor
function appendValue(value) {
    display.value += value;
}

// Limpa o visor
function clearDisplay() {
    display.value = '';
}

// Calcula o resultado de forma segura
function calculate() {
    try {
        let expression = display.value;

        // Substitui "^" por "Math.pow" para potência
        if (expression.includes('^')) {
            expression = expression.replace(/\^/g, '**'); // Substitui "^" por "**" para JavaScript
        }

        // Substitui "%" por "/100" para o cálculo correto
        expression = expression.replace('%', '/100');

        // Avalia a expressão e exibe o resultado
        display.value = eval(expression);
    } catch (error) {
        alert('Erro na expressão!');
        clearDisplay();
    }
}

// Calcula a raiz quadrada
function calculateSquareRoot() {
    try {
        const value = parseFloat(display.value);
        if (value < 0) {
            alert('Número negativo não tem raiz quadrada real.');
            return clearDisplay();
        }
        display.value = Math.sqrt(value);
    } catch (error) {
        alert('Erro na expressão!');
        clearDisplay();
    }
}
