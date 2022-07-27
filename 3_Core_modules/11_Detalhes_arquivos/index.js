const fs = require('fs')

const trocarArquivo = false

if(trocarArquivo) {
    detalheArquivo('arquivo.txt')
}else {
    detalheArquivo('novaPasta')
}

function detalheArquivo(arquivo) {
    fs.stat(arquivo, function(err, stats) {
        if(err) {
            console.log(err)
            return
        }

        console.log(stats.isFile())
        console.log(stats.isDirectory())
        console.log(stats.isSymbolicLink())
        console.log(stats.ctime)
        console.log(stats.size)
    })
}