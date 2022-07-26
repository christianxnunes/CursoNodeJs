const fs = require('fs');

console.log('')
console.log('Bem-Vindo ao 1° exercício de nodeJs')
console.log('')

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
})