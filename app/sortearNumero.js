const maiorValor = 100
const menorValor = 1
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 100)
}

console.log('Número Secreto:', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor