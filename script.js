/**
 * Função para gerar 6 números aleatórios únicos para Mega-Sena
 */
function sortear() {
    const numeros = [];
    const display = document.getElementById('resultado');
    
    while(numeros.length < 6) {
        const num = Math.floor(Math.random() * 60) + 1;
        // Validação de unicidade (Engenharia de Software 101)
        if(!numeros.includes(num)) {
            numeros.push(num);
        }
    }

    // Ordenação numérica (a-b)
    numeros.sort((a, b) => a - b);

    // Renderização no DOM
    display.innerHTML = numeros
        .map(n => `<div class="bola">${n < 10 ? '0'+n : n}</div>`)
        .join('');
}
