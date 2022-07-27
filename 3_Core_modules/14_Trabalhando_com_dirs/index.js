const fs = require('fs')

const nomePasta = 'minhapasta'

if(!fs.existsSync(`./${nomePasta}`)) {
    console.log('Não existe!')
    fs.mkdirSync(nomePasta)
}else {
    console.log('Existe!')
}