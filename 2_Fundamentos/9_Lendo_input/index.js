const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual sua linguagem preferida?', (language) => {
    if(language == "php") {
        console.log(`Sai dai: ${language}`)
        readline.close()
    }
    console.log(`A minha linguagem preferida é: ${language}`)
    readline.close()
})
