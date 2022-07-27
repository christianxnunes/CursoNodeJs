const fs = require('fs')

const trocarNome = false

if(trocarNome) {
    renomarArquivo('arquivo.txt', 'novoarquivo.txt')
}else {
    renomarArquivo('novoarquivo.txt', 'arquivo.txt')
}

function renomarArquivo(arquivo, novoarquivo) {
    fs.rename(arquivo, novoarquivo, function(err) {
        if(err) {
            console.log(err)
            return
        }
        console.log('Arquivo renomeado!')
    })
}