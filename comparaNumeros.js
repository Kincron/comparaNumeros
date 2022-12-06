
function verificaNumeros (num1, num2) {
    
    if (num1 === num2) {
        console.log(`Os números ${num1} e ${num2} são iguais. `)
    } else {
        console.log(`Os números ${num1} e ${num2} não são iguais. `)
    }

    //Também pode ser feito: return (num1 === num2) ? `Os números ${num1} e ${num2} são iguais.` : `Os números ${num1} e ${num2} não são iguais`;
    //Porém quase o mesmo erro acontece de exibir o NaN, porém, o erro é exibido no final da frase e exibe '.undefined'
}

function verificaSoma (num1, num2) {
    let soma = num1 + num2

    if (soma > 10 && soma < 20) {
        console.log(`Sua soma é ${soma}, que é maior que 10 e menor que 20.`)
    } else if (soma === 10) {
        console.log(`Sua soma é ${soma}, que é igual a 10 e menor que 20`)
    } else if (soma === 20) {
        console.log(`Sua soma é ${soma}, que é maior que 10 e igual a 20`)
    } else if (soma > 11 && soma > 20) {
        console.log(`Sua soma é ${soma}, que é maior que 10 e maior que 20`)
    } else {
        console.log(`Sua soma é ${soma}, que é menor que 10 e menor que 20`)
    }
}

console.log(verificaNumeros(10, 10) + verificaSoma(10, 10))  // Ao executar tudo, exibe a expressão NaN, não consegui resolver este problema.
