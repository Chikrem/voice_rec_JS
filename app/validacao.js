function validaChute(chute) {
    const numero = +chute // Transformar o chute que vem em forma de string, em um número inteiro.
    
    if (chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido </div>'
        return
    } // Se esse parâmetro que eu estou passando, for um not a number, esse valor é inválido.

    // if (chuteForInvalido(numero)) {
    //     if (chute.toUpperCase() === "GAME OVER") {

    //         document.body.innerHTML =
    //             `
    //             <h2>Game Over!!!</h2>
    //             <h3>Pressione o botão para jogar novamente</h3>
    //             <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
    //             `
    //             document.body.style.backgroundColor = "black";
    //     } else {

    //         elementoChute.innerHTML += '<div>Valor Inválido</div>';
    //     }
    // }

    if (chuteMaiorMenor(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    } // Se o número for maior que o 'maiorValor', ou se o número for menor que o 'menorValor', vamos ter uma mensagem de erro.

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente </button>
       `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div> O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div> O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    } //Dicas
}

function chuteMaiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}


document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
